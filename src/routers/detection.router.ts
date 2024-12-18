import express from "express";
import { WakaAI } from "../core";

const router = express.Router();

const validateRequest = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { text } = req.body;
  if (!text) {
    res.status(400).json({ error: "Text is required" });
    return;
  }
  next();
};

router.post(
  "/detect",
  validateRequest,
  async (req: express.Request, res: express.Response): Promise<any> => {
    try {
      const { score, reasoning } = await WakaAI.getDetectionResult(
        req.body.text
      );
      res.json({ score, reasoning });
    } catch (error) {
      res.status(500).json({ error: "Failed to process the text" });
    }
  }
);

export default router;
