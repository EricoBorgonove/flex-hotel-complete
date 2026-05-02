require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const hotelsRoutes = require("./routes/hotels.routes");
const usersRoutes = require("./routes/users.routes");
const guestsRoutes = require("./routes/guests.routes");
const roomsRoutes = require("./routes/rooms.routes");
const reservationsRoutes = require("./routes/reservations.routes");
const staysRoutes = require("./routes/stays.routes");

const errorMiddleware = require("./middlewares/error");

const app = express();

app.use(cors());
app.use(express.json());

// health check (fora do /api, útil para deploy)
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

const api = "/api";

app.use(`${api}/auth`, authRoutes);
app.use(`${api}/hotels`, hotelsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/guests`, guestsRoutes);
app.use(`${api}/rooms`, roomsRoutes);
app.use(`${api}/reservations`, reservationsRoutes);
app.use(`${api}/stays`, staysRoutes);

// middleware de erro (sempre por último)
app.use(errorMiddleware);

module.exports = app;
