const prisma = require("../lib/prisma");

function toDateOnlyISO(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 0, 0, 0));
}

async function listRooms({ user, hotelId: filterHotelId }) {
  const isSuper = (user.roles || []).includes("SUPER_ADMIN");
  const userHotelId = user.hotelId;

  if (!userHotelId && !isSuper) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const hotelId = filterHotelId || userHotelId;

  if (!isSuper && hotelId !== userHotelId) {
    const err = new Error("You can only list rooms from your hotel");
    err.code = "FORBIDDEN";
    throw err;
  }

  const rooms = await prisma.room.findMany({
    where: hotelId ? { hotelId } : {},
    include: {
      category: true,
      hotel: { select: { id: true, name: true, city: true } },
    },
    orderBy: [{ floor: "asc" }, { number: "asc" }],
  });

  return rooms;
}

async function getRoomById({ user, roomId }) {
  const isSuper = (user.roles || []).includes("SUPER_ADMIN");
  const userHotelId = user.hotelId;

  if (!userHotelId && !isSuper) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const room = await prisma.room.findUnique({
    where: { id: roomId },
    include: {
      hotel: { select: { id: true, name: true, city: true } },
      category: true,
      reservationRooms: { include: { reservation: true } },
      blocks: true,
    },
  });

  if (!room) {
    const err = new Error("Room not found");
    err.code = "NOT_FOUND";
    throw err;
  }

  if (!isSuper && room.hotelId !== userHotelId) {
    const err = new Error("You can only access rooms from your hotel");
    err.code = "FORBIDDEN";
    throw err;
  }

  return room;
}

async function findAvailableRooms({ user, hotelId, from, to }) {
  const isSuper = (user.roles || []).includes("SUPER_ADMIN");
  const userHotelId = user.hotelId;

  if (!userHotelId && !isSuper) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const fromDate = toDateOnlyISO(from);
  const toDate = toDateOnlyISO(to);

  if (!(toDate > fromDate)) {
    const err = new Error("`to` must be greater than `from`");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const blockingStatuses = ["pending", "confirmed", "checked_in"];

  const rooms = await prisma.room.findMany({
    where: {
      ...(hotelId ? { hotelId } : {}),
      status: "available",
      NOT: [
        {
          reservationRooms: {
            some: {
              reservation: {
                status: { in: blockingStatuses },
                checkInDate: { lt: toDate },
                checkOutDate: { gt: fromDate },
              },
            },
          },
        },
        {
          blocks: {
            some: {
              startDate: { lt: toDate },
              endDate: { gt: fromDate },
            },
          },
        },
      ],
    },
    include: {
      hotel: { select: { id: true, name: true, city: true } },
      category: true,
    },
    orderBy: [{ floor: "asc" }, { number: "asc" }],
  });

  return {
    from,
    to,
    count: rooms.length,
    rooms: rooms.map((r) => ({
      id: r.id,
      number: r.number,
      floor: r.floor,
      status: r.status,
      hotel: r.hotel,
      category: {
        id: r.category.id,
        name: r.category.name,
        capacity: r.category.capacity,
        basePrice: r.category.basePrice,
      },
    })),
  };
}

async function updateRoomStatus({ user, roomId, status }) {
  const isSuper = (user.roles || []).includes("SUPER_ADMIN");
  const userHotelId = user.hotelId;

  if (!userHotelId && !isSuper) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const room = await prisma.room.findUnique({
    where: { id: roomId },
  });

  if (!room) {
    const err = new Error("Room not found");
    err.code = "NOT_FOUND";
    throw err;
  }

  if (!isSuper && room.hotelId !== userHotelId) {
    const err = new Error("You can only update rooms from your hotel");
    err.code = "FORBIDDEN";
    throw err;
  }

  const validStatuses = ["available", "occupied", "cleaning", "maintenance", "blocked"];
  if (!validStatuses.includes(status)) {
    const err = new Error(`Invalid status. Must be one of: ${validStatuses.join(", ")}`);
    err.code = "BAD_REQUEST";
    throw err;
  }

  const updated = await prisma.room.update({
    where: { id: roomId },
    data: { status },
    include: {
      category: true,
      hotel: { select: { id: true, name: true, city: true } },
    },
  });

  return updated;
}

module.exports = {
  listRooms,
  getRoomById,
  findAvailableRooms,
  updateRoomStatus,
};
