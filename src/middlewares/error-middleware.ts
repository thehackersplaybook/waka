import express from "express";

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
  res.status(500);
  res.json({ error: err.message });
};
