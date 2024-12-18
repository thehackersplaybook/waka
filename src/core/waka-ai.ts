import { Prompts } from "./prompts";
import { AiFactory } from "./ai-factory";
import { AiModel } from "../models";
import { z } from "zod";

export class WakaAI {
  public static async getDetectionResult(
    text: string,
    model: AiModel = "openai"
  ): Promise<any> {
    console.log("getDetectionResult.params", { text, model });
    if (!text) {
      throw new Error("Text is required");
    }

    const aiClient = AiFactory.createByModel(model);
    const { object: result } = await aiClient.generateObject({
      prompt: Prompts.DETECT_SCORE_AND_REASONING(text),
      schema: z.object({
        score: z.number().min(0).max(1),
        reasoning: z.string(),
      }),
    });

    console.log("getDetectionResult.result", result);
    return result;
  }
}
