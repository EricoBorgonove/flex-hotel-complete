const prisma = require("../lib/prisma");

function isSuper(user) {
  return (user.roles || []).includes("SUPER_ADMIN");
}

function scopedHotelId({ user, hotelId }) {
  if (isSuper(user)) return hotelId || null;
  return user.hotelId;
}

function ensureHotelScope({ user, hotelId, action }) {
  if (!isSuper(user) && !user.hotelId) {
    const err = new Error("User without hotel scope");
    err.code = "BAD_REQUEST";
    throw err;
  }

  if (!isSuper(user) && hotelId && hotelId !== user.hotelId) {
    const err = new Error(`You can only ${action} guests from your hotel`);
    err.code = "FORBIDDEN";
    throw err;
  }
}

async function list({ user, query = {} }) {
  ensureHotelScope({ user, hotelId: query.hotelId, action: "list" });

  const hotelId = scopedHotelId({ user, hotelId: query.hotelId });
  const where = {};

  if (hotelId) where.hotelId = hotelId;

  if (query.q) {
    where.OR = [
      { name: { contains: query.q, mode: "insensitive" } },
      { document: { contains: query.q, mode: "insensitive" } },
      { phone: { contains: query.q, mode: "insensitive" } },
      { email: { contains: query.q, mode: "insensitive" } },
    ];
  }

  return prisma.guest.findMany({
    where,
    include: {
      hotel: { select: { id: true, name: true } },
      _count: { select: { reservations: true } },
    },
    orderBy: { createdAt: "desc" },
    take: query.limit || 50,
    skip: (query.page || 0) * (query.limit || 50),
  });
}

async function create({ user, input }) {
  ensureHotelScope({ user, hotelId: input.hotelId, action: "create" });

  const hotelId = scopedHotelId({ user, hotelId: input.hotelId });
  if (!hotelId) {
    const err = new Error("hotelId is required for SUPER_ADMIN");
    err.code = "BAD_REQUEST";
    throw err;
  }

  const hotel = await prisma.hotel.findUnique({ where: { id: hotelId } });
  if (!hotel) {
    const err = new Error("Hotel not found");
    err.code = "NOT_FOUND";
    throw err;
  }

  return prisma.guest.create({
    data: {
      hotelId,
      name: input.name,
      document: input.document,
      phone: input.phone,
      email: input.email,
    },
    include: {
      hotel: { select: { id: true, name: true } },
      _count: { select: { reservations: true } },
    },
  });
}

async function getById({ user, guestId }) {
  ensureHotelScope({ user, action: "access" });

  const guest = await prisma.guest.findUnique({
    where: { id: guestId },
    include: {
      hotel: { select: { id: true, name: true } },
      reservations: {
        orderBy: { createdAt: "desc" },
        include: {
          rooms: { include: { room: true } },
        },
      },
    },
  });

  if (!guest) {
    const err = new Error("Guest not found");
    err.code = "NOT_FOUND";
    throw err;
  }

  if (!isSuper(user) && guest.hotelId !== user.hotelId) {
    const err = new Error("You can only access guests from your hotel");
    err.code = "FORBIDDEN";
    throw err;
  }

  return guest;
}

async function update({ user, guestId, input }) {
  const guest = await getById({ user, guestId });

  return prisma.guest.update({
    where: { id: guest.id },
    data: {
      name: input.name,
      document: input.document,
      phone: input.phone,
      email: input.email,
    },
    include: {
      hotel: { select: { id: true, name: true } },
      _count: { select: { reservations: true } },
    },
  });
}

module.exports = { list, create, getById, update };
