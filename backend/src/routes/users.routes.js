const router = require("express").Router();
const auth = require("../middlewares/auth");
const { requireRoles } = require("../middlewares/roles");
const usersController = require("../controllers/users.controller");

router.use(auth);

// listar usuários do hotel (ADMIN) ou todos (SUPER_ADMIN com query)
router.get(
  "/",
  requireRoles("SUPER_ADMIN", "ADMIN"),
  usersController.list
);

// criar usuário no hotel
router.post(
  "/",
  requireRoles("SUPER_ADMIN", "ADMIN"),
  usersController.create
);

// ver usuário
router.get(
  "/:userId",
  requireRoles("SUPER_ADMIN", "ADMIN"),
  usersController.getById
);

// atualizar usuário (nome, ativo)
router.patch(
  "/:userId",
  requireRoles("SUPER_ADMIN", "ADMIN"),
  usersController.update
);

// desativar
router.patch(
  "/:userId/disable",
  requireRoles("SUPER_ADMIN", "ADMIN"),
  usersController.disable
);

// set roles (substitui todas)
router.put(
  "/:userId/roles",
  requireRoles("SUPER_ADMIN", "ADMIN"),
  usersController.setRoles
);

module.exports = router;
