const router = require("express").Router();
const auth = require("../middlewares/auth");
const { requireRoles } = require("../middlewares/roles");
const hotelsController = require("../controllers/hotels.controller");

router.use(auth);

// SUPER_ADMIN: listar todos
router.get(
  "/",
  requireRoles("SUPER_ADMIN"),
  hotelsController.list
);

// SUPER_ADMIN: criar
router.post(
  "/",
  requireRoles("SUPER_ADMIN"),
  hotelsController.create
);

// ADMIN/SUPER_ADMIN: ver hotel (admin só o próprio)
router.get(
  "/:hotelId",
  requireRoles("SUPER_ADMIN", "ADMIN", "MANAGER"),
  hotelsController.getById
);

// ADMIN/SUPER_ADMIN: atualizar (admin só o próprio)
router.patch(
  "/:hotelId",
  requireRoles("SUPER_ADMIN", "ADMIN"),
  hotelsController.update
);

module.exports = router;
