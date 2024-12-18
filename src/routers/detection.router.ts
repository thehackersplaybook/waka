import express from "express";
import { WakaAI } from "../core";

const router = express.Router();

router.post(
  "/detect",
  async (req: express.Request, res: express.Response): Promise<any> => {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    try {
      const { score, reasoning } = await WakaAI.getDetectionResult(text);
      res.json({ score, reasoning });
    } catch (error) {
      res.status(500).json({ error: "Failed to process the text" });
    }
  }
);

export default router;
