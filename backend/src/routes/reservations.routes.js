const router = require("express").Router();
const auth = require("../middlewares/auth");
const { requireRoles } = require("../middlewares/roles");
const reservationsController = require("../controllers/reservations.controller");

router.use(auth);

// GET /reservations - Listar reservações
router.get(
  "/",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION"),
  reservationsController.list
);

// POST /reservations - Criar reservação
router.post(
  "/",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION"),
  reservationsController.create
);

// GET /reservations/:reservationId - Buscar por ID
router.get(
  "/:reservationId",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION"),
  reservationsController.getById
);

// PATCH /reservations/:reservationId - Atualizar
router.patch(
  "/:reservationId",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION"),
  reservationsController.update
);

// DELETE /reservations/:reservationId - Cancelar
router.delete(
  "/:reservationId",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION"),
  reservationsController.cancel
);

module.exports = router;
