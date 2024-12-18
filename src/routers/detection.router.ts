import express from "express";
const router = express.Router();

router.post(
  "/detect",
  async (req: express.Request, res: express.Response): Promise<any> => {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    try {
      const aiScore = Math.random() * 100;
      const aiReasoning = "This is a placeholder reasoning.";

      res.json({ score: aiScore, reasoning: aiReasoning });
    } catch (error) {
      res.status(500).json({ error: "Failed to process the text" });
    }
  }
);

export default router;
