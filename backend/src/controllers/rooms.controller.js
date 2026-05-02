const roomsService = require("../services/rooms.service");
const { roomsAvailableQuerySchema, roomsUpdateStatusSchema } = require("../lib/validators");

async function list(req, res, next) {
  try {
    const result = await roomsService.listRooms({
      user: req.user,
      hotelId: req.query.hotelId,
    });
    return res.json(result);
  } catch (e) {
    if (e?.code === "BAD_REQUEST") return res.status(400).json({ message: e.message });
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    next(e);
  }
}

async function getById(req, res, next) {
  try {
    const result = await roomsService.getRoomById({
      user: req.user,
      roomId: req.params.roomId,
    });
    return res.json(result);
  } catch (e) {
    if (e?.code === "BAD_REQUEST") return res.status(400).json({ message: e.message });
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    next(e);
  }
}

async function available(req, res, next) {
  try {
    const parsed = roomsAvailableQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid query", details: parsed.error.flatten() });
    }

    const hotelId = parsed.data.hotelId || req.user?.hotelId;
    if (!hotelId && !(req.user?.roles || []).includes("SUPER_ADMIN")) {
      return res.status(400).json({ message: "User without hotel scope" });
    }

    const result = await roomsService.findAvailableRooms({
      user: req.user,
      hotelId,
      from: parsed.data.from,
      to: parsed.data.to,
    });

    return res.json(result);
  } catch (e) {
    if (e?.code === "BAD_REQUEST") return res.status(400).json({ message: e.message });
    next(e);
  }
}

async function updateStatus(req, res, next) {
  try {
    const parsed = roomsUpdateStatusSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });
    }

    const result = await roomsService.updateRoomStatus({
      user: req.user,
      roomId: req.params.roomId,
      status: parsed.data.status,
    });

    return res.json(result);
  } catch (e) {
    if (e?.code === "BAD_REQUEST") return res.status(400).json({ message: e.message });
    if (e?.code === "NOT_FOUND") return res.status(404).json({ message: e.message });
    if (e?.code === "FORBIDDEN") return res.status(403).json({ message: e.message });
    next(e);
  }
}

module.exports = { list, getById, available, updateStatus };
