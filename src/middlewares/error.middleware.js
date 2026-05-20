// middlewares/error.middleware.js

export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;

    this.name = this.constructor.name;
  }
}

export class NotFoundError extends AppError {
  constructor(msg) {
    super(msg, 404);
  }
}

export class BadRequestError extends AppError {
  constructor(msg) {
    super(msg, 400);
  }
}

export class UnauthorizedError extends AppError {
  constructor(msg) {
    super(msg, 401);
  }
}

export class ForbiddenError extends AppError {
  constructor(msg) {
    super(msg, 403);
  }
}

export class ConflictError extends AppError {
  constructor(msg) {
    super(msg, 409);
  }
}

export const errorMiddleware = (err, req, res, next) => {
  // Erreurs Mongoose

  if (err.name === "CastError") {
    return res.status(400).json({ success: false, error: `Invalid ID: ${err.value}` });
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];

    return res.status(409).json({ success: false, error: `${field} already exists` });
  }

  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((e) => e.message);

    return res.status(400).json({ success: false, error: errors.join(", ") });
  }

  // Erreurs applicatives (AppError et ses enfants)

  const status = err.statusCode || 500;

  res.status(status).json({
    success: false,

    error: err.message || "Internal Server Error",

    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
