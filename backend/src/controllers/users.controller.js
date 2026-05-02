const usersService = require("../services/users.service");
const {
  usersListQuerySchema,
  usersCreateSchema,
  usersUpdateSchema,
  usersSetRolesSchema,
} = require("../lib/validators");

async function list(req, res, next) {
  try {
    const parsed = usersListQuerySchema.safeParse(req.query);
    if (!parsed.success) return res.status(400).json({ message: "Invalid query", details: parsed.error.flatten() });

    const data = await usersService.list({ user: req.user, query: parsed.data });
    res.json(data);
  } catch (e) {
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    next(e);
  }
}

async function create(req, res, next) {
  try {
    const parsed = usersCreateSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });

    const created = await usersService.create({ user: req.user, input: parsed.data });
    res.status(201).json(created);
  } catch (e) {
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    if (e?.code === "CONFLICT") return res.status(409).json({ message: e.message });
    next(e);
  }
}

async function getById(req, res, next) {
  try {
    const data = await usersService.getById({ user: req.user, userId: req.params.userId });
    res.json(data);
  } catch (e) {
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    if (e?.code === "BAD_REQUEST") return res.status(400).json({ message: e.message });
    if (e?.code === "CONFLICT") return res.status(409).json({ message: e.message });
    next(e);
  }
}

async function update(req, res, next) {
  try {
    const parsed = usersUpdateSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });

    const data = await usersService.update({ user: req.user, userId: req.params.userId, input: parsed.data });
    res.json(data);
  } catch (e) {
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    next(e);
  }
}

async function disable(req, res, next) {
  try {
    const data = await usersService.update({ user: req.user, userId: req.params.userId, input: { isActive: false } });
    res.json(data);
  } catch (e) {
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    next(e);
  }
}

async function setRoles(req, res, next) {
  try {
    const parsed = usersSetRolesSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });

    const data = await usersService.setRoles({ user: req.user, userId: req.params.userId, roles: parsed.data.roles });
    res.json(data);
  } catch (e) {
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    next(e);
  }
}

module.exports = { list, create, getById, update, disable, setRoles };
