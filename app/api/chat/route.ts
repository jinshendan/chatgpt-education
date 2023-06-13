// 从 'openai' 包中导入 OpenAIApi 和 Configuration 类型
import { OpenAIApi, Configuration } from "openai";

// 从 './config' 文件中导入 apiKey
import { apiKey } from "./config";

import { ChatRequest } from "./typing";

// 创建一个新的 Configuration 实例，并使用 apiKey 进行配置
const config = new Configuration({
  apiKey,
});

// 使用前面配置的 config 创建一个新的 OpenAIApi 客户端
const openai = new OpenAIApi(config);

// 定义一个异步函数 POST，它接收一个请求，并返回一个响应
export async function POST(req: Request) {
  try {
    const requestBody = (await req.json()) as ChatRequest;
    // 使用 openai.createChatCompletion 方法创建一个 chat completion
    // 这个方法接受两个参数：
    // 第一个参数是包含了一系列消息和使用的模型信息的对象
    // 第二个参数是一个包含代理设置的对象
    const completion = await openai.createChatCompletion(
      {
        ...requestBody
      },
      {
        proxy: {},
      }
    );

    // 如果 createChatCompletion 方法成功执行，那么将返回一个新的 Response 对象
    // 这个 Response 对象的内容是 completion.data 的 JSON 字符串
    return new Response(JSON.stringify(completion.data));
  } catch (e) {
    // 如果在执行 createChatCompletion 方法时发生错误，那么将返回一个新的 Response 对象
    // 这个 Response 对象的内容是错误对象 e 的 JSON 字符串
    return new Response(JSON.stringify(e));
  }
}
