import dotenv from "dotenv";
import express from "express";
import { DetectionRouter } from "./routers";
import { errorMiddleware } from "./middlewares";

dotenv.config();

const app = express();

app.use(express.json());
app.use(errorMiddleware);
app.use("/api/v1/ai-detection", DetectionRouter);

export default app;
