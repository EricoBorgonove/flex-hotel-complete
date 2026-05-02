const { verifyToken } = require("../lib/jwt");

function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ message: "Missing token" });

  try {
    req.user = verifyToken(token); // { userId, hotelId, roles: [...] }
    return next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = auth;
