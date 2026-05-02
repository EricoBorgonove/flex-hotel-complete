const router = require("express").Router();
const auth = require("../middlewares/auth");
const { requireRoles } = require("../middlewares/roles");
const staysController = require("../controllers/stays.controller");

router.use(auth);

// 1) Check-in: cria stay, seta reserva checked_in e quartos occupied
router.post(
  "/:reservationId/checkin",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION"),
  staysController.checkin
);

// 2) Check-out: fecha stay, seta reserva checked_out e quartos cleaning
router.post(
  "/:stayId/checkout",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION"),
  staysController.checkout
);

// 3a) Lançar cobrança/consumo
router.post(
  "/:stayId/charges",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION", "FINANCE"),
  staysController.addCharge
);

// 3b) Registrar pagamento
router.post(
  "/:stayId/payments",
  requireRoles("SUPER_ADMIN", "ADMIN", "FINANCE", "RECEPTION"),
  staysController.addPayment
);

// (opcional) Ver conta da hospedagem
router.get(
  "/:stayId/bill",
  requireRoles("SUPER_ADMIN", "ADMIN", "RECEPTION", "FINANCE", "MANAGER"),
  staysController.getBill
);

module.exports = router;
