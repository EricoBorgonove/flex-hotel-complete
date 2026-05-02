const prisma = require("../lib/prisma");

// YYYY-MM-DD => Date UTC 00:00
function toDateOnlyISO(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 0, 0, 0));
}

function daysBetween(dateA, dateB) {
  // dateA/dateB: Date (UTC 00:00)
  const ms = dateB.getTime() - dateA.getTime();
  return Math.round(ms / (24 * 60 * 60 * 1000));
}

function reservationHotelScope({ isSuper, hotelId }) {
  return isSuper ? {} : { hotelId };
}

async function checkin({ user, reservationId, input }) {
  const isSuper = (user.roles || []).includes("SUPER_ADMIN");
  const hotelId = user.hotelId;

  if (!hotelId && !isSuper) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const checkInAt = input.checkInAt ? new Date(input.checkInAt) : new Date();

  return prisma.$transaction(async (tx) => {
    const reservation = await tx.reservation.findFirst({
      where: { id: reservationId, ...reservationHotelScope({ isSuper, hotelId }) },
      include: {
        rooms: { include: { room: { include: { category: true } } } },
        stay: true,
      },
    });

    if (!reservation) {
      const err = new Error("Reservation not found");
      err.code = "NOT_FOUND";
      throw err;
    }

    if (reservation.status !== "confirmed") {
      const err = new Error("Reservation must be confirmed to check-in");
      err.code = "CONFLICT";
      err.details = { status: reservation.status };
      throw err;
    }

    if (reservation.stay) {
      const err = new Error("Stay already exists for this reservation");
      err.code = "CONFLICT";
      err.details = { stayId: reservation.stay.id };
      throw err;
    }

    // Confere quartos ainda reserváveis (status)
    const rooms = reservation.rooms.map((rr) => rr.room);
    const notOk = rooms.filter((r) => r.status !== "available");
    if (notOk.length) {
      const err = new Error("One or more rooms are not available to check-in");
      err.code = "CONFLICT";
      err.details = notOk.map((r) => ({ roomId: r.id, number: r.number, status: r.status }));
      throw err;
    }

    // Cria stay
    const stay = await tx.stay.create({
      data: {
        reservationId: reservation.id,
        checkInAt,
        status: "open",
      },
    });

    // Atualiza reserva + quartos
    await tx.reservation.update({
      where: { id: reservation.id },
      data: { status: "checked_in" },
    });

    await tx.room.updateMany({
      where: { id: { in: rooms.map((r) => r.id) } },
      data: { status: "occupied" },
    });

    // Gera diárias (MVP): num_diarias = (checkOutDate - checkInDate)
    if (input.generateDailyCharges) {
      const ci = toDateOnlyISO(reservation.checkInDate.toISOString().slice(0, 10));
      const co = toDateOnlyISO(reservation.checkOutDate.toISOString().slice(0, 10));
      const nights = daysBetween(ci, co);

      if (nights <= 0) {
        const err = new Error("Invalid reservation dates for daily charges");
        err.code = "BAD_REQUEST";
        err.details = { checkInDate: reservation.checkInDate, checkOutDate: reservation.checkOutDate };
        throw err;
      }

      // Para cada quarto reservado, lança (nights * dailyRate)
      const chargesData = reservation.rooms.map((rr) => ({
        stayId: stay.id,
        type: "daily",
        description: `Diárias (${nights} noite(s)) - Quarto ${rr.room.number}`,
        amount: Number(rr.dailyRate) * nights,
        occurredAt: checkInAt,
      }));

      await tx.charge.createMany({ data: chargesData });
    }

    const full = await tx.stay.findUnique({
      where: { id: stay.id },
      include: {
        reservation: {
          include: {
            guest: true,
            rooms: { include: { room: true } },
          },
        },
        charges: true,
        payments: true,
      },
    });

    return full;
  });
}

async function checkout({ user, stayId, input }) {
  const isSuper = (user.roles || []).includes("SUPER_ADMIN");
  const hotelId = user.hotelId;
  if (!hotelId && !isSuper) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const checkOutAt = input.checkOutAt ? new Date(input.checkOutAt) : new Date();

  return prisma.$transaction(async (tx) => {
    const stay = await tx.stay.findFirst({
      where: { id: stayId, reservation: reservationHotelScope({ isSuper, hotelId }) },
      include: {
        reservation: {
          include: {
            rooms: { include: { room: true } },
          },
        },
        charges: true,
        payments: true,
      },
    });

    if (!stay) {
      const err = new Error("Stay not found");
      err.code = "NOT_FOUND";
      throw err;
    }

    if (stay.status !== "open") {
      const err = new Error("Stay must be open to checkout");
      err.code = "CONFLICT";
      err.details = { status: stay.status };
      throw err;
    }

    // Regra de fechamento financeiro (MVP):
    // não permitir checkout se saldo > 0 (pode ajustar depois pra permitir “paga depois”)
    const totalCharges = stay.charges.reduce((acc, c) => acc + Number(c.amount), 0);
    const totalPaid = stay.payments
      .filter((p) => p.status === "paid")
      .reduce((acc, p) => acc + Number(p.amount), 0);

    const balance = Number((totalCharges - totalPaid).toFixed(2));
    if (balance > 0) {
      const err = new Error("Outstanding balance. Add payment before checkout.");
      err.code = "CONFLICT";
      err.details = { totalCharges, totalPaid, balance };
      throw err;
    }

    // Fecha stay
    await tx.stay.update({
      where: { id: stay.id },
      data: { status: "closed", checkOutAt },
    });

    // Atualiza reserva
    await tx.reservation.update({
      where: { id: stay.reservationId },
      data: { status: "checked_out" },
    });

    // Quartos -> cleaning
    const roomIds = stay.reservation.rooms.map((rr) => rr.roomId);
    await tx.room.updateMany({
      where: { id: { in: roomIds } },
      data: { status: "cleaning" },
    });

    const full = await tx.stay.findUnique({
      where: { id: stay.id },
      include: {
        reservation: { include: { guest: true, rooms: { include: { room: true } } } },
        charges: true,
        payments: true,
      },
    });

    return {
      ...full,
      totals: { totalCharges, totalPaid, balance },
    };
  });
}

async function addCharge({ user, stayId, input }) {
  const isSuper = (user.roles || []).includes("SUPER_ADMIN");
  const hotelId = user.hotelId;
  if (!hotelId && !isSuper) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const occurredAt = input.occurredAt ? new Date(input.occurredAt) : new Date();

  // Desconto: guarda como valor NEGATIVO (facilita somar totals)
  const amount = input.type === "discount" ? -Math.abs(input.amount) : input.amount;

  const stay = await prisma.stay.findFirst({
    where: { id: stayId, reservation: reservationHotelScope({ isSuper, hotelId }) },
    select: { id: true, status: true },
  });

  if (!stay) {
    const err = new Error("Stay not found");
    err.code = "NOT_FOUND";
    throw err;
  }

  if (stay.status !== "open") {
    const err = new Error("Cannot add charge to a closed stay");
    err.code = "CONFLICT";
    err.details = { status: stay.status };
    throw err;
  }

  return prisma.charge.create({
    data: {
      stayId,
      type: input.type,
      description: input.description,
      amount,
      occurredAt,
    },
  });
}

async function addPayment({ user, stayId, input }) {
  const isSuper = (user.roles || []).includes("SUPER_ADMIN");
  const hotelId = user.hotelId;
  if (!hotelId && !isSuper) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const paidAt = input.paidAt ? new Date(input.paidAt) : new Date();

  return prisma.$transaction(async (tx) => {
    const stay = await tx.stay.findFirst({
      where: { id: stayId, reservation: reservationHotelScope({ isSuper, hotelId }) },
      include: { charges: true, payments: true },
    });

    if (!stay) {
      const err = new Error("Stay not found");
      err.code = "NOT_FOUND";
      throw err;
    }

    if (stay.status !== "open") {
      const err = new Error("Cannot add payment to a closed stay");
      err.code = "CONFLICT";
      err.details = { status: stay.status };
      throw err;
    }

    const totalCharges = stay.charges.reduce((acc, c) => acc + Number(c.amount), 0);
    const totalPaid = stay.payments
      .filter((p) => p.status === "paid")
      .reduce((acc, p) => acc + Number(p.amount), 0);

    const balance = Number((totalCharges - totalPaid).toFixed(2));

    // Regra RN-06: pagamentos não podem exceder total (considerando pagos)
    // Se status não for "paid", não entra nesse limite.
    if (input.status === "paid" && input.amount > balance) {
      const err = new Error("Payment exceeds outstanding balance");
      err.code = "CONFLICT";
      err.details = { totalCharges, totalPaid, balance, attempted: input.amount };
      throw err;
    }

    const payment = await tx.payment.create({
      data: {
        stayId,
        method: input.method,
        amount: input.amount,
        paidAt,
        status: input.status,
      },
    });

    return payment;
  });
}

async function getBill({ user, stayId }) {
  const isSuper = (user.roles || []).includes("SUPER_ADMIN");
  const hotelId = user.hotelId;
  if (!hotelId && !isSuper) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const stay = await prisma.stay.findFirst({
    where: { id: stayId, reservation: reservationHotelScope({ isSuper, hotelId }) },
    include: {
      reservation: { include: { guest: true, rooms: { include: { room: true } } } },
      charges: { orderBy: { occurredAt: "asc" } },
      payments: { orderBy: { paidAt: "asc" } },
    },
  });

  if (!stay) {
    const err = new Error("Stay not found");
    err.code = "NOT_FOUND";
    throw err;
  }

  const totalCharges = stay.charges.reduce((acc, c) => acc + Number(c.amount), 0);
  const totalPaid = stay.payments
    .filter((p) => p.status === "paid")
    .reduce((acc, p) => acc + Number(p.amount), 0);
  const balance = Number((totalCharges - totalPaid).toFixed(2));

  return {
    stayId: stay.id,
    status: stay.status,
    guest: stay.reservation.guest,
    rooms: stay.reservation.rooms.map((rr) => rr.room),
    charges: stay.charges,
    payments: stay.payments,
    totals: { totalCharges, totalPaid, balance },
  };
}

module.exports = { checkin, checkout, addCharge, addPayment, getBill };
