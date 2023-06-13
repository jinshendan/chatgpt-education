// 从 'openai' 包中导入 CreateChatCompletionRequest 和 CreateChatCompletionResponse 类型
import type {
    CreateChatCompletionRequest,
    CreateChatCompletionResponse,
  } from "openai";
  
  // 创建一个新的类型 ChatRequest，它等同于 CreateChatCompletionRequest
  export type ChatRequest = CreateChatCompletionRequest;
  
  // 创建一个新的类型 ChatResponse，它等同于 CreateChatCompletionResponse
  export type ChatReponse = CreateChatCompletionResponse;
  