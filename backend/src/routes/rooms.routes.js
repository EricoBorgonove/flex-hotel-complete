const router = require("express").Router();
const auth = require("../middlewares/auth");
const { requireRoles } = require("../middlewares/roles");
const roomsController = require("../controllers/rooms.controller");

router.use(auth);

// GET /rooms - Listar todos os quartos
router.get(
  "/",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION", "MANAGER"),
  roomsController.list
);

// GET /rooms/available?from=YYYY-MM-DD&to=YYYY-MM-DD - Quartos disponíveis
router.get(
  "/available",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION", "MANAGER"),
  roomsController.available
);

// GET /rooms/:roomId - Buscar quarto por ID
router.get(
  "/:roomId",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION", "MANAGER"),
  roomsController.getById
);

// PATCH /rooms/:roomId/status - Atualizar status do quarto
router.patch(
  "/:roomId/status",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION", "HOUSEKEEPING"),
  roomsController.updateStatus
);

module.exports = router;
