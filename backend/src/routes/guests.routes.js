const router = require("express").Router();
const auth = require("../middlewares/auth");
const { requireRoles } = require("../middlewares/roles");
const guestsController = require("../controllers/guests.controller");

router.use(auth);

router.get(
  "/",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION", "MANAGER"),
  guestsController.list
);

router.post(
  "/",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION"),
  guestsController.create
);

router.get(
  "/:guestId",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION", "MANAGER"),
  guestsController.getById
);

router.patch(
  "/:guestId",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION"),
  guestsController.update
);

module.exports = router;
