const prisma = require("../lib/prisma");
const { hashPassword } = require("../lib/hash");

function isSuper(user) {
  return (user.roles || []).includes("SUPER_ADMIN");
}

function mustSameHotel(requester, targetHotelId) {
  if (isSuper(requester)) return true;
  return requester.hotelId && requester.hotelId === targetHotelId;
}

async function list({ user, query }) {
  // ADMIN lista apenas do próprio hotel
  // SUPER_ADMIN pode listar tudo ou filtrar por hotelId
  if (!isSuper(user) && !user.hotelId) {
    const err = new Error("User without hotel scope");
    err.code = "FORBIDDEN";
    throw err;
  }

  const where = {};
  if (isSuper(user)) {
    if (query.hotelId) where.hotelId = query.hotelId;
  } else {
    where.hotelId = user.hotelId;
  }

  const users = await prisma.user.findMany({
    where,
    include: { userRoles: { include: { role: true } }, hotel: true },
    orderBy: { createdAt: "desc" },
  });

  return users.map((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    isActive: u.isActive,
    hotelId: u.hotelId,
    hotelName: u.hotel?.name,
    roles: u.userRoles.map((ur) => ur.role.name),
    createdAt: u.createdAt,
    lastLoginAt: u.lastLoginAt,
  }));
}

async function create({ user, input }) {
  const targetHotelId = isSuper(user) ? (input.hotelId || null) : user.hotelId;

  if (!isSuper(user) && !targetHotelId) {
    const err = new Error("ADMIN must belong to a hotel to create users");
    err.code = "FORBIDDEN";
    throw err;
  }

  if (!isSuper(user) && input.roles.includes("SUPER_ADMIN")) {
    const err = new Error("Only SUPER_ADMIN can assign SUPER_ADMIN role");
    err.code = "FORBIDDEN";
    throw err;
  }

  if (!isSuper(user) && input.hotelId && input.hotelId !== user.hotelId) {
    const err = new Error("ADMIN can only create users in own hotel");
    err.code = "FORBIDDEN";
    throw err;
  }

  const passwordHash = await hashPassword(input.password);

  try {
    return await prisma.$transaction(async (tx) => {
      // garante roles
      const roles = await tx.role.findMany({ where: { name: { in: input.roles } } });
      if (roles.length !== input.roles.length) {
        const err = new Error("One or more roles not found. Run seed.");
        err.code = "BAD_REQUEST";
        throw err;
      }

      const created = await tx.user.create({
        data: {
          name: input.name,
          email: input.email,
          passwordHash,
          hotelId: targetHotelId,
          isActive: input.isActive ?? true,
        },
      });

      await tx.userRole.createMany({
        data: roles.map((r) => ({ userId: created.id, roleId: r.id })),
      });

      const full = await tx.user.findUnique({
        where: { id: created.id },
        include: { userRoles: { include: { role: true } }, hotel: true },
      });

      return {
        id: full.id,
        name: full.name,
        email: full.email,
        isActive: full.isActive,
        hotelId: full.hotelId,
        hotelName: full.hotel?.name,
        roles: full.userRoles.map((ur) => ur.role.name),
        createdAt: full.createdAt,
      };
    });
  } catch (e) {
    // unique email
    if (String(e.message || "").includes("Unique constraint failed") || e.code === "P2002") {
      const err = new Error("Email already in use");
      err.code = "CONFLICT";
      throw err;
    }
    throw e;
  }
}

async function getById({ user, userId }) {
  const target = await prisma.user.findUnique({
    where: { id: userId },
    include: { userRoles: { include: { role: true } }, hotel: true },
  });

  if (!target) {
    const err = new Error("User not found");
    err.code = "NOT_FOUND";
    throw err;
  }

  if (!mustSameHotel(user, target.hotelId)) {
    const err = new Error("Forbidden");
    err.code = "FORBIDDEN";
    throw err;
  }

  return {
    id: target.id,
    name: target.name,
    email: target.email,
    isActive: target.isActive,
    hotelId: target.hotelId,
    hotelName: target.hotel?.name,
    roles: target.userRoles.map((ur) => ur.role.name),
    createdAt: target.createdAt,
    lastLoginAt: target.lastLoginAt,
  };
}

async function update({ user, userId, input }) {
  const target = await prisma.user.findUnique({
    where: { id: userId },
    include: { userRoles: { include: { role: true } } },
  });
  if (!target) {
    const err = new Error("User not found");
    err.code = "NOT_FOUND";
    throw err;
  }

  if (!mustSameHotel(user, target.hotelId)) {
    const err = new Error("Forbidden");
    err.code = "FORBIDDEN";
    throw err;
  }

  if (!isSuper(user)) {
    const allowed = {
      name: input.name,
      isActive: input.isActive,
    };

    if (input.email || input.password || input.hotelId !== undefined || input.roles) {
      const err = new Error("Only SUPER_ADMIN can edit email, password, hotel or roles");
      err.code = "FORBIDDEN";
      throw err;
    }

    return prisma.user.update({
      where: { id: userId },
      data: allowed,
      select: { id: true, name: true, email: true, isActive: true, hotelId: true, createdAt: true },
    });
  }

  if (input.hotelId) {
    const hotel = await prisma.hotel.findUnique({ where: { id: input.hotelId } });
    if (!hotel) {
      const err = new Error("Hotel not found");
      err.code = "NOT_FOUND";
      throw err;
    }
  }

  if (input.roles) {
    const roleRows = await prisma.role.findMany({ where: { name: { in: input.roles } } });
    if (roleRows.length !== input.roles.length) {
      const err = new Error("One or more roles not found. Run seed.");
      err.code = "BAD_REQUEST";
      throw err;
    }
  }

  const data = {
    name: input.name,
    email: input.email,
    hotelId: input.hotelId,
    isActive: input.isActive,
  };

  if (input.password) {
    data.passwordHash = await hashPassword(input.password);
  }

  try {
    return await prisma.$transaction(async (tx) => {
      await tx.user.update({
        where: { id: userId },
        data,
      });

      if (input.roles) {
        const roleRows = await tx.role.findMany({ where: { name: { in: input.roles } } });
        await tx.userRole.deleteMany({ where: { userId } });
        await tx.userRole.createMany({
          data: roleRows.map((role) => ({ userId, roleId: role.id })),
        });
      }

      const full = await tx.user.findUnique({
        where: { id: userId },
        include: { userRoles: { include: { role: true } }, hotel: true },
      });

      return {
        id: full.id,
        name: full.name,
        email: full.email,
        isActive: full.isActive,
        hotelId: full.hotelId,
        hotelName: full.hotel?.name,
        roles: full.userRoles.map((ur) => ur.role.name),
        createdAt: full.createdAt,
        lastLoginAt: full.lastLoginAt,
      };
    });
  } catch (e) {
    if (String(e.message || "").includes("Unique constraint failed") || e.code === "P2002") {
      const err = new Error("Email already in use");
      err.code = "CONFLICT";
      throw err;
    }
    throw e;
  }
}

async function setRoles({ user, userId, roles }) {
  const target = await prisma.user.findUnique({
    where: { id: userId },
    include: { userRoles: true },
  });

  if (!target) {
    const err = new Error("User not found");
    err.code = "NOT_FOUND";
    throw err;
  }

  if (!mustSameHotel(user, target.hotelId)) {
    const err = new Error("Forbidden");
    err.code = "FORBIDDEN";
    throw err;
  }

  if (!isSuper(user) && roles.includes("SUPER_ADMIN")) {
    const err = new Error("Only SUPER_ADMIN can assign SUPER_ADMIN role");
    err.code = "FORBIDDEN";
    throw err;
  }

  return prisma.$transaction(async (tx) => {
    const roleRows = await tx.role.findMany({ where: { name: { in: roles } } });
    if (roleRows.length !== roles.length) {
      const err = new Error("One or more roles not found. Run seed.");
      err.code = "BAD_REQUEST";
      throw err;
    }

    await tx.userRole.deleteMany({ where: { userId } });
    await tx.userRole.createMany({
      data: roleRows.map((r) => ({ userId, roleId: r.id })),
    });

    const full = await tx.user.findUnique({
      where: { id: userId },
      include: { userRoles: { include: { role: true } } },
    });

    return {
      id: full.id,
      roles: full.userRoles.map((ur) => ur.role.name),
    };
  });
}

module.exports = { list, create, getById, update, setRoles };
