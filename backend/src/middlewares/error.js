module.exports = (err, req, res, next) => {
  console.error(err);

  const statusByCode = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
  };

  const status = err.status || statusByCode[err.code] || 500;
  const message = status === 500 ? "Internal server error" : err.message;

  res.status(status).json({ message, details: err.details });
};
