import { type ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  process.env.NODE_ENV !== "development" &&
    console.error(`ERROR: ${err.stack}`);
  res.status(err.cause || 500).json({ message: err.message });
};

export { errorHandler };
