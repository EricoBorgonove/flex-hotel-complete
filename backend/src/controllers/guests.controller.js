const guestsService = require("../services/guests.service");
const {
  guestsListQuerySchema,
  guestsCreateSchema,
  guestsUpdateSchema,
} = require("../lib/validators");

async function list(req, res, next) {
  try {
    const parsed = guestsListQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid query", details: parsed.error.flatten() });
    }

    const data = await guestsService.list({ user: req.user, query: parsed.data });
    return res.json(data);
  } catch (e) {
    next(e);
  }
}

async function create(req, res, next) {
  try {
    const parsed = guestsCreateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });
    }

    const created = await guestsService.create({ user: req.user, input: parsed.data });
    return res.status(201).json(created);
  } catch (e) {
    next(e);
  }
}

async function getById(req, res, next) {
  try {
    const data = await guestsService.getById({ user: req.user, guestId: req.params.guestId });
    return res.json(data);
  } catch (e) {
    next(e);
  }
}

async function update(req, res, next) {
  try {
    const parsed = guestsUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });
    }

    const data = await guestsService.update({
      user: req.user,
      guestId: req.params.guestId,
      input: parsed.data,
    });
    return res.json(data);
  } catch (e) {
    next(e);
  }
}

module.exports = { list, create, getById, update };
