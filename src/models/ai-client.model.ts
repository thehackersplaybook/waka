import { GenerateObjectResult } from "ai";

export interface AiClient {
  generateText: (options: any) => Promise<any>;
  generateObject: <T>(options: any) => Promise<GenerateObjectResult<T>>;
}
