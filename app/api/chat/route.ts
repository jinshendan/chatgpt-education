import { OpenAIApi, Configuration } from "openai";
import { ChatRequest } from "./typing";

const isProd = process.env.NODE_ENV === "production";

let apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAIApi(
  new Configuration({
    apiKey,
  })
);

export async function POST(req: Request) {
  try {
    const requestBody = (await req.json()) as ChatRequest;
    const completion = await openai!.createChatCompletion(
      {
        ...requestBody,
      },
      isProd
        ? {}
        : {}
    );

    return new Response(JSON.stringify(completion.data));
  } catch (e) {
    return new Response(JSON.stringify(e));
  }
}