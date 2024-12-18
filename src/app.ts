import dotenv from "dotenv";
import express from "express";
import { DetectionRouter } from "./routers";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/v1/ai-detection", DetectionRouter);

export default app;
