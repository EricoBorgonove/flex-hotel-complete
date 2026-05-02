const prisma = require("../lib/prisma");

function toDateOnlyISO(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 0, 0, 0));
}

async function findConflicts({ tx, hotelId, roomIds, from, to }) {
  const blockingStatuses = ["pending", "confirmed", "checked_in"];

  // 1) conflitos por reservas
  const reservationConflicts = await tx.reservationRoom.findMany({
    where: {
      roomId: { in: roomIds },
      reservation: {
        hotelId,
        status: { in: blockingStatuses },
        checkInDate: { lt: to },
        checkOutDate: { gt: from },
      },
    },
    include: {
      room: { select: { id: true, number: true, floor: true } },
      reservation: { select: { id: true, checkInDate: true, checkOutDate: true, status: true } },
    },
  });

  // 2) conflitos por bloqueios
  const blockConflicts = await tx.roomBlock.findMany({
    where: {
      roomId: { in: roomIds },
      startDate: { lt: to },
      endDate: { gt: from },
    },
    include: {
      room: { select: { id: true, number: true, floor: true } },
    },
  });

  return { reservationConflicts, blockConflicts };
}

async function createReservation({ user, input }) {
  const isSuper = (user.roles || []).includes("SUPER_ADMIN");
  let hotelId = user.hotelId;

  if (!hotelId && !isSuper) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const from = toDateOnlyISO(input.checkInDate);
  const to = toDateOnlyISO(input.checkOutDate);

  if (!(to > from)) {
    const err = new Error("checkOutDate must be greater than checkInDate");
    err.code = "BAD_REQUEST";
    throw err;
  }

  return prisma.$transaction(async (tx) => {
    if (isSuper && !hotelId) {
      const selectedRooms = await tx.room.findMany({
        where: { id: { in: input.roomIds } },
        select: { hotelId: true },
        distinct: ["hotelId"],
      });

      if (selectedRooms.length !== 1) {
        const err = new Error("SUPER_ADMIN reservations must use rooms from one hotel");
        err.code = "BAD_REQUEST";
        throw err;
      }

      hotelId = selectedRooms[0].hotelId;
    }

    // Confere se todos os quartos pertencem ao hotel e estão reserváveis
    const rooms = await tx.room.findMany({
      where: { id: { in: input.roomIds }, hotelId },
      include: { category: true },
    });

    if (rooms.length !== input.roomIds.length) {
      const err = new Error("One or more rooms not found in this hotel");
      err.code = "BAD_REQUEST";
      throw err;
    }

    // Opcional: só aceitar quartos status available para reserva direta
    const notAvailable = rooms.filter((r) => r.status !== "available");
    if (notAvailable.length) {
      const err = new Error("One or more rooms are not available by status");
      err.code = "CONFLICT";
      err.details = notAvailable.map((r) => ({ roomId: r.id, number: r.number, status: r.status }));
      throw err;
    }

    // Anti-overlap (reservas + bloqueios)
    const { reservationConflicts, blockConflicts } = await findConflicts({
      tx,
      hotelId,
      roomIds: input.roomIds,
      from,
      to,
    });

    if (reservationConflicts.length || blockConflicts.length) {
      const err = new Error("Date conflict for one or more rooms");
      err.code = "CONFLICT";
      err.details = {
        reservations: reservationConflicts.map((c) => ({
          roomId: c.room.id,
          roomNumber: c.room.number,
          reservationId: c.reservation.id,
          status: c.reservation.status,
          checkInDate: c.reservation.checkInDate,
          checkOutDate: c.reservation.checkOutDate,
        })),
        blocks: blockConflicts.map((b) => ({
          roomId: b.room.id,
          roomNumber: b.room.number,
          startDate: b.startDate,
          endDate: b.endDate,
          reason: b.reason,
        })),
      };
      throw err;
    }

    // Guest: usa guestId ou cria
    let guestId = input.guest.guestId;

    if (!guestId) {
      if (!input.guest.name) {
        const err = new Error("guest.name is required when guestId is not provided");
        err.code = "BAD_REQUEST";
        throw err;
      }

      const guest = await tx.guest.create({
        data: {
          hotelId,
          name: input.guest.name,
          document: input.guest.document,
          phone: input.guest.phone,
          email: input.guest.email,
        },
      });
      guestId = guest.id;
    } else {
      const exists = await tx.guest.findUnique({ where: { id: guestId } });
      if (!exists) {
        const err = new Error("guestId not found");
        err.code = "BAD_REQUEST";
        throw err;
      }

      if (exists.hotelId !== hotelId) {
        const err = new Error("guestId does not belong to this hotel");
        err.code = "FORBIDDEN";
        throw err;
      }
    }

    const reservation = await tx.reservation.create({
      data: {
        hotelId,
        guestId,
        checkInDate: from,
        checkOutDate: to,
        status: input.status || "confirmed",
        source: input.source,
        notes: input.notes,
      },
    });

    const adults = input.occupants?.adults ?? 1;
    const children = input.occupants?.children ?? 0;

    // Monta reservation_rooms com daily_rate = basePrice da categoria (MVP)
    await tx.reservationRoom.createMany({
      data: rooms.map((r) => ({
        reservationId: reservation.id,
        roomId: r.id,
        dailyRate: r.category.basePrice, // base no cadastro da categoria
        adults,
        children,
      })),
    });

    const created = await tx.reservation.findUnique({
      where: { id: reservation.id },
      include: {
        guest: true,
        rooms: { include: { room: { include: { category: true } } } },
      },
    });

    return created;
  });
}

async function listReservations({ user, query = {} }) {
  const isSuper = (user.roles || []).includes("SUPER_ADMIN");
  const hotelId = user.hotelId;

  if (!hotelId && !isSuper) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const where = {};
  
  if (!isSuper) {
    where.hotelId = hotelId;
  } else if (query.hotelId) {
    where.hotelId = query.hotelId;
  }

  if (query.status) {
    where.status = query.status;
  }

  if (query.guestId) {
    where.guestId = query.guestId;
  }

  const reservations = await prisma.reservation.findMany({
    where,
    include: {
      guest: true,
      rooms: { include: { room: { include: { category: true } } } },
    },
    orderBy: { createdAt: "desc" },
    take: query.limit || 50,
    skip: (query.page || 0) * (query.limit || 50),
  });

  return reservations;
}

async function getReservationById({ user, reservationId }) {
  const isSuper = (user.roles || []).includes("SUPER_ADMIN");
  const hotelId = user.hotelId;

  if (!hotelId && !isSuper) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const reservation = await prisma.reservation.findUnique({
    where: { id: reservationId },
    include: {
      guest: true,
      rooms: { include: { room: { include: { category: true } } } },
      stay: { include: { charges: true, payments: true } },
    },
  });

  if (!reservation) {
    const err = new Error("Reservation not found");
    err.code = "NOT_FOUND";
    throw err;
  }

  if (!isSuper && reservation.hotelId !== hotelId) {
    const err = new Error("You can only access reservations in your hotel");
    err.code = "FORBIDDEN";
    throw err;
  }

  return reservation;
}

async function updateReservation({ user, reservationId, input }) {
  const isSuper = (user.roles || []).includes("SUPER_ADMIN");
  const hotelId = user.hotelId;

  if (!hotelId && !isSuper) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const existing = await prisma.reservation.findUnique({
    where: { id: reservationId },
  });

  if (!existing) {
    const err = new Error("Reservation not found");
    err.code = "NOT_FOUND";
    throw err;
  }

  if (!isSuper && existing.hotelId !== hotelId) {
    const err = new Error("You can only update reservations in your hotel");
    err.code = "FORBIDDEN";
    throw err;
  }

  // Não permitir atualizar status para estados finais
  if (input.status && ["checked_out", "cancelled"].includes(input.status)) {
    const err = new Error("Cannot manually set reservation to checked_out or cancelled");
    err.code = "CONFLICT";
    throw err;
  }

  const updated = await prisma.reservation.update({
    where: { id: reservationId },
    data: {
      notes: input.notes,
      source: input.source,
      status: input.status,
    },
    include: {
      guest: true,
      rooms: { include: { room: { include: { category: true } } } },
    },
  });

  return updated;
}

async function cancelReservation({ user, reservationId }) {
  const isSuper = (user.roles || []).includes("SUPER_ADMIN");
  const hotelId = user.hotelId;

  if (!hotelId && !isSuper) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const existing = await prisma.reservation.findUnique({
    where: { id: reservationId },
    include: { stay: true },
  });

  if (!existing) {
    const err = new Error("Reservation not found");
    err.code = "NOT_FOUND";
    throw err;
  }

  if (!isSuper && existing.hotelId !== hotelId) {
    const err = new Error("You can only cancel reservations in your hotel");
    err.code = "FORBIDDEN";
    throw err;
  }

  // Não permitir cancelar se já foi feito check-in ou check-out
  if (existing.status === "checked_in" || existing.status === "checked_out" || existing.stay) {
    const err = new Error("Cannot cancel reservation that has already been checked in");
    err.code = "CONFLICT";
    throw err;
  }

  const cancelled = await prisma.reservation.update({
    where: { id: reservationId },
    data: { status: "cancelled" },
    include: {
      guest: true,
      rooms: { include: { room: { include: { category: true } } } },
    },
  });

  return cancelled;
}

module.exports = { createReservation, listReservations, getReservationById, updateReservation, cancelReservation };
