const reservationsService = require("../services/reservations.service");
const {
  reservationsCreateSchema,
  reservationsUpdateSchema,
  reservationsListQuerySchema,
} = require("../lib/validators");

async function list(req, res, next) {
  try {
    const parsed = reservationsListQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid query", details: parsed.error.flatten() });
    }

    const result = await reservationsService.listReservations({
      user: req.user,
      query: parsed.data,
    });

    return res.json(result);
  } catch (e) {
    if (e?.code === "BAD_REQUEST") return res.status(400).json({ message: e.message });
    next(e);
  }
}

async function create(req, res, next) {
  try {
    const parsed = reservationsCreateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });
    }

    const result = await reservationsService.createReservation({
      user: req.user,
      input: parsed.data,
    });

    return res.status(201).json(result);
  } catch (e) {
    if (e?.code === "CONFLICT") {
      return res.status(409).json({ message: e.message, details: e.details });
    }
    if (e?.code === "BAD_REQUEST") {
      return res.status(400).json({ message: e.message, details: e.details });
    }
    next(e);
  }
}

async function getById(req, res, next) {
  try {
    const result = await reservationsService.getReservationById({
      user: req.user,
      reservationId: req.params.reservationId,
    });

    return res.json(result);
  } catch (e) {
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    if (e?.code === "BAD_REQUEST") return res.status(400).json({ message: e.message });
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    next(e);
  }
}

async function update(req, res, next) {
  try {
    const parsed = reservationsUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });
    }

    const result = await reservationsService.updateReservation({
      user: req.user,
      reservationId: req.params.reservationId,
      input: parsed.data,
    });

    return res.json(result);
  } catch (e) {
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    if (e?.code === "BAD_REQUEST") return res.status(400).json({ message: e.message });
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    if (e?.code === "CONFLICT") return res.status(409).json({ message: e.message });
    next(e);
  }
}

async function cancel(req, res, next) {
  try {
    const result = await reservationsService.cancelReservation({
      user: req.user,
      reservationId: req.params.reservationId,
    });

    return res.json(result);
  } catch (e) {
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    if (e?.code === "BAD_REQUEST") return res.status(400).json({ message: e.message });
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    if (e?.code === "CONFLICT") return res.status(409).json({ message: e.message });
    next(e);
  }
}

module.exports = { list, create, getById, update, cancel };
