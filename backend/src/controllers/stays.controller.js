const staysService = require("../services/stays.services");
const {
  staysCheckinSchema,
  staysCheckoutSchema,
  staysChargeSchema,
  staysPaymentSchema,
} = require("../lib/validators");

async function checkin(req, res, next) {
  try {
    const parsed = staysCheckinSchema.safeParse(req.body || {});
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });
    }

    const result = await staysService.checkin({
      user: req.user,
      reservationId: req.params.reservationId,
      input: parsed.data,
    });

    return res.status(201).json(result);
  } catch (e) {
    if (e?.code === "CONFLICT") return res.status(409).json({ message: e.message, details: e.details });
    if (e?.code === "BAD_REQUEST") return res.status(400).json({ message: e.message, details: e.details });
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    next(e);
  }
}

async function checkout(req, res, next) {
  try {
    const parsed = staysCheckoutSchema.safeParse(req.body || {});
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });
    }

    const result = await staysService.checkout({
      user: req.user,
      stayId: req.params.stayId,
      input: parsed.data,
    });

    return res.json(result);
  } catch (e) {
    if (e?.code === "CONFLICT") return res.status(409).json({ message: e.message, details: e.details });
    if (e?.code === "BAD_REQUEST") return res.status(400).json({ message: e.message, details: e.details });
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    next(e);
  }
}

async function addCharge(req, res, next) {
  try {
    const parsed = staysChargeSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });
    }

    const result = await staysService.addCharge({
      user: req.user,
      stayId: req.params.stayId,
      input: parsed.data,
    });

    return res.status(201).json(result);
  } catch (e) {
    if (e?.code === "CONFLICT") return res.status(409).json({ message: e.message, details: e.details });
    if (e?.code === "BAD_REQUEST") return res.status(400).json({ message: e.message, details: e.details });
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    next(e);
  }
}

async function addPayment(req, res, next) {
  try {
    const parsed = staysPaymentSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });
    }

    const result = await staysService.addPayment({
      user: req.user,
      stayId: req.params.stayId,
      input: parsed.data,
    });

    return res.status(201).json(result);
  } catch (e) {
    if (e?.code === "CONFLICT") return res.status(409).json({ message: e.message, details: e.details });
    if (e?.code === "BAD_REQUEST") return res.status(400).json({ message: e.message, details: e.details });
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    next(e);
  }
}

async function getBill(req, res, next) {
  try {
    const result = await staysService.getBill({
      user: req.user,
      stayId: req.params.stayId,
    });
    return res.json(result);
  } catch (e) {
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    if (e?.code === "BAD_REQUEST") return res.status(400).json({ message: e.message });
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    next(e);
  }
}

module.exports = { checkin, checkout, addCharge, addPayment, getBill };
