const authService = require("../services/auth.service");
const { authLoginSchema } = require("../lib/validators");

async function login(req, res, next) {
  try {
    const parsed = authLoginSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid body", details: parsed.error.flatten() });
    }

    const result = await authService.login(parsed.data);
    res.json(result);
  } catch (e) {
    if (e?.code === "UNAUTHORIZED") {
      return res.status(401).json({ message: e.message });
    }
    next(e);
  }
}

module.exports = { login };
