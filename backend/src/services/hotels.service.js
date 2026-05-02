const prisma = require("../lib/prisma");

function isSuper(user) {
  return (user.roles || []).includes("SUPER_ADMIN");
}

async function list({ user }) {
  if (!isSuper(user)) {
    const err = new Error("Only SUPER_ADMIN can list all hotels");
    err.code = "FORBIDDEN";
    throw err;
  }
  return prisma.hotel.findMany({ orderBy: { createdAt: "desc" } });
}

async function create({ user, input }) {
  if (!isSuper(user)) {
    const err = new Error("Only SUPER_ADMIN can create hotel");
    err.code = "FORBIDDEN";
    throw err;
  }
  return prisma.hotel.create({ data: input });
}

async function getById({ user, hotelId }) {
  if (!isSuper(user) && user.hotelId !== hotelId) {
    const err = new Error("You can only access your own hotel");
    err.code = "FORBIDDEN";
    throw err;
  }

  const hotel = await prisma.hotel.findUnique({ where: { id: hotelId } });
  if (!hotel) {
    const err = new Error("Hotel not found");
    err.code = "NOT_FOUND";
    throw err;
  }
  return hotel;
}

async function update({ user, hotelId, input }) {
  if (!isSuper(user) && user.hotelId !== hotelId) {
    const err = new Error("You can only update your own hotel");
    err.code = "FORBIDDEN";
    throw err;
  }

  const hotel = await prisma.hotel.findUnique({ where: { id: hotelId } });
  if (!hotel) {
    const err = new Error("Hotel not found");
    err.code = "NOT_FOUND";
    throw err;
  }

  return prisma.hotel.update({ where: { id: hotelId }, data: input });
}

module.exports = { list, create, getById, update };
