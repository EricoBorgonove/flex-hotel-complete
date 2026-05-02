const hotelsService = require("../services/hotels.service");
const { hotelsCreateSchema, hotelsUpdateSchema } = require("../lib/validators");

async function list(req, res, next) {
  try {
    const data = await hotelsService.list({ user: req.user });
    res.json(data);
  } catch (e) {
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    next(e);
  }
}

async function create(req, res, next) {
  try {
    const parsed = hotelsCreateSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });

    const created = await hotelsService.create({ user: req.user, input: parsed.data });
    res.status(201).json(created);
  } catch (e) {
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    next(e);
  }
}

async function getById(req, res, next) {
  try {
    const data = await hotelsService.getById({ user: req.user, hotelId: req.params.hotelId });
    res.json(data);
  } catch (e) {
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    next(e);
  }
}

async function update(req, res, next) {
  try {
    const parsed = hotelsUpdateSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });

    const data = await hotelsService.update({ user: req.user, hotelId: req.params.hotelId, input: parsed.data });
    res.json(data);
  } catch (e) {
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    next(e);
  }
}

module.exports = { list, create, getById, update };
