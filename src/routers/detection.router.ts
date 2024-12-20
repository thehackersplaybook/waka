import express from "express";
import { WakaAI } from "../core";
import { AiModel } from "../models";
import { StatusCodes } from "http-status-codes/build/cjs";

const router = express.Router();

const validateRequest = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { text } = req.body;
  if (!text) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: "Text is required" });
    return;
  }
  next();
};

router.post(
  "/detect",
  validateRequest,
  async (req: express.Request, res: express.Response): Promise<any> => {
    try {
      const model = req.body.model as AiModel;
      const { score, reasoning } = await WakaAI.getDetectionResult(
        req.body.text,
        model
      );
      res.json({ score, reasoning });
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "Failed to process the text" });
    }
  }
);

export default router;
