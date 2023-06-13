import type { ChatRequest, ChatReponse } from "./api/chat/typing";
import { Message } from "./store";

/*
requestChat 函数接收一个 Message 数组作为参数，然后构造一个 ChatRequest 对象，这个对象只包含用户和系统的消息，不包括助手的消息。
然后，它发送一个 POST 请求到 /api/chat，并将这个 ChatRequest 对象转换为 JSON 格式作为请求体。
最后，它从服务器的响应中解析出 ChatReponse 对象并返回。
*/
export async function requestChat(messages: Message[]) {
  const req: ChatRequest = {
    model: "gpt-3.5-turbo",
    messages: messages
      .map((v) => ({
        role: v.role,
        content: v.content,
      }))
      .filter((m) => m.role !== "assistant"),
  };

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });

  return (await res.json()) as ChatReponse;
}

/* requestWithPrompt 函数接收一个 Message 数组和一个提示字符串作为参数。
   它先将这个提示字符串作为一个系统消息添加到消息数组的尾部，
   然后调用 requestChat 函数发送请求。
   在接收到服务器的响应后，它返回助手的回答，如果助手没有回答，它返回一个空字符串。 */
export async function requestWithPrompt(messages: Message[], prompt: string) {
  messages = messages.concat([
    {
      role: "system",
      content: prompt,
      date: new Date().toLocaleString(),
    },
  ]);

  const res = await requestChat(messages);

  return res.choices.at(0)?.message?.content ?? "";
}