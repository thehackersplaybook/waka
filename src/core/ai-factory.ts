import { generateText, generateObject, LanguageModel } from "ai";
import { AiClient, AiModel } from "../models";
import { anthropic } from "@ai-sdk/anthropic";
import { openai } from "@ai-sdk/openai";
import { Constants } from "../constants";

export class AiFactory {
  public static createByModel(model: AiModel): AiClient {
    let modelLib = AiFactory.getModelLib(model);

    const generateTextWithModel = (options: any) =>
      generateText({ model: modelLib, ...options });
    const generateObjectWithModel = <T>(options: any) =>
      generateObject<T>({ model: modelLib, ...options });

    return {
      generateText: generateTextWithModel,
      generateObject: generateObjectWithModel,
    };
  }

  private static getModelLib(model: AiModel): LanguageModel | null {
    if (model === "openai") {
      return openai(Constants.SUPPORTED_AI_MODELS.OPENAI_GPT_4O);
    } else if (model === "anthropic") {
      return anthropic(
        Constants.SUPPORTED_AI_MODELS.ANTHROPIC_CLAUDE_3_5_SONNET_LATEST
      );
    }

    return null;
  }
}
