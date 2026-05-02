const prisma = require("../lib/prisma");
const { comparePassword } = require("../lib/hash");
const { signToken } = require("../lib/jwt");

async function login({ email, password }) {
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      hotel: true,
      userRoles: { include: { role: true } },
    },
  });

  if (!user || !user.isActive) {
    const err = new Error("Invalid credentials");
    err.code = "UNAUTHORIZED";
    throw err;
  }

  const ok = await comparePassword(password, user.passwordHash);
  if (!ok) {
    const err = new Error("Invalid credentials");
    err.code = "UNAUTHORIZED";
    throw err;
  }

  const roles = user.userRoles.map(ur => ur.role.name);

  await prisma.user.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date() },
  });

  const token = signToken({ userId: user.id, hotelId: user.hotelId, roles });

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      hotelId: user.hotelId,
      hotelName: user.hotel?.name || null,
      roles,
    },
  };
}

module.exports = { login };
