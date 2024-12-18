import express from "express";
import { StatusCodes } from "http-status-codes/build/cjs";

export const errorMiddleware = (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error("server error: ", err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  res.json({ error: err.message });
};
