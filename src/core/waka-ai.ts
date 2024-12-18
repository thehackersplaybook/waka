import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { Prompts } from "./prompts";

export class WakaAI {
  public static async getDetectionResult(text: string): Promise<any> {
    if (!text) {
      throw new Error("Text is required");
    }

    return generateText({
      model: openai("gpt-4o"),
      prompt: Prompts.DETECT_SCORE(text),
    })
      .then(({ text: score }) =>
        generateText({
          model: openai("gpt-4o"),
          prompt: Prompts.DETECT_REASONING(score),
        }).then(({ text: reasoning }) => ({ score, reasoning }))
      )
      .catch((error) => {
        throw new Error("ai-detection: failed to process the text");
      });
  }
}
