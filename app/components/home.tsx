"use client";

import { IconButton } from "./button";
import styles from "./home.module.css";

import SettingsIcon from "../icons/settings.svg";
import GithubIcon from "../icons/github.svg";
import ChatGptIcon from "../icons/chatgpt.svg";
import SendWhiteIcon from "../icons/send-white.svg";
import BrainIcon from "../icons/brain.svg";
import ExportIcon from "../icons/export.svg";
import BotIcon from "../icons/bot.svg";
import UserIcon from "../icons/user.svg";
import AddIcon from "../icons/add.svg";

/*这是一个聊天项组件，表示一条聊天记录。它接收一个包含了聊天信息的 props 对象，然后将这些信息渲染到屏幕上 */
export function ChatItem(props: {
  onClick?: () => void;
  title: string;
  count: number;
  time: string;
  selected: boolean;
}) {
  return (
    <div
      className={`${styles["chat-item"]} ${
        props.selected && styles["chat-item-selected"]
      }`}
    >
      <div className={styles["chat-item-title"]}>{props.title}</div>
      <div className={styles["chat-item-info"]}>
        <div className={styles["chat-item-count"]}>已有 {props.count} 条对话</div>
        <div className={styles["chat-item-date"]}>{props.time}</div>
      </div>
    </div>
  );
}

/*ChatList：这个组件用于渲染一个聊天列表。它生成了一些模拟数据，然后为每个数据项渲染一个 ChatItem 组件。 */
export function ChatList() {
  const listData = new Array(3).fill({
    title: "这是一个List中的标题",
    count: 5,
    time: new Date().toLocaleString(),
  });

  const selectedIndex = 0;

  return (
    <div className={styles["chat-list"]}>
      {listData.map((item, i) => (
        <ChatItem {...item} key={i} selected={i === selectedIndex} />
      ))}
    </div>
  );
}

/*Chat：这个组件表示一个聊天窗口，它显示了一个聊天的详细信息。它包括了一个聊天头部（包含聊天标题和一些动作按钮），一个聊天主体（显示所有的聊天消息），以及一个输入面板（用于输入新的消息）。 */
export function Chat() {
  const messages = [
    {
      role: "user",
      content: "这是一条用户发送的消息",
      date: new Date().toLocaleString(),
    },
    {
      role: "bot",
      content: "这是一条chatgpt的回复".repeat(10),
      date: new Date().toLocaleString(),
    },
  ];

  const title = "这是一个聊天框标题";
  const count = 5;

  return (
    <div className={styles.chat}>
      <div className={styles["chat-header"]}>
        <div>
          <div className={styles["chat-header-title"]}>{title}</div>
          <div className={styles["chat-header-sub-title"]}>
            当前聊天框有 {count} 条对话
          </div>
        </div>
        <div className={styles["chat-actions"]}>
          <div className={styles["chat-action-button"]}>
            <IconButton icon={<BrainIcon />} bordered />
          </div>
          <div className={styles["chat-action-button"]}>
            <IconButton icon={<ExportIcon />} bordered />
          </div>
        </div>
      </div>

      <div className={styles["chat-body"]}>
        {messages.map((message, i) => {
          const isUser = message.role === "user";

          return (
            <div
              key={i}
              className={
                isUser ? styles["chat-message-user"] : styles["chat-message"]
              }
            >
              <div className={styles["chat-message-container"]}>
                <div className={styles["chat-message-avtar"]}>
                  {message.role === "user" ? <UserIcon /> : <BotIcon />}
                </div>
                <div className={styles["chat-message-item"]}>
                  {message.content}
                </div>
                {!isUser && (
                  <div className={styles["chat-message-actions"]}>
                    <div className={styles["chat-message-action-date"]}>
                      {message.date}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles["chat-input-panel"]}>
        <div className={styles["chat-input-panel-inner"]}>
          <textarea
            className={styles["chat-input"]}
            placeholder="输入消息"
            rows={3}
          />
          <IconButton
            icon={<SendWhiteIcon />}
            text={"发送"}
            className={styles["chat-input-send"]}
          />
        </div>
      </div>
    </div>
  );
}

/*Home 组件将以上的所有组件组合起来，创建了一个完整的聊天应用界面。这个界面包括了一个侧边栏（包含应用的标题，logo，和聊天列表）和一个聊天窗口。*/
export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles["sidebar-header"]}>
          <div className={styles["sidebar-title"]}>ChatGPT Education</div>
          <div className={styles["sidebar-sub-title"]}>
            Smart Education with ChatGPT.
          </div>
          <div className={styles["sidebar-logo"]}>
            <ChatGptIcon />
          </div>
        </div>

        <div className={styles["sidebar-body"]}>
          <ChatList />
        </div>

        <div className={styles["sidebar-tail"]}>
          <div className={styles["sidebar-actions"]}>
            <div className={styles["sidebar-action"]}>
              <IconButton icon={<SettingsIcon />} />
            </div>
            <div className={styles["sidebar-action"]}>
              <IconButton icon={<GithubIcon />} />
            </div>
          </div>
          <div>
            <IconButton icon={<AddIcon />} text={"新的聊天"} />
          </div>
        </div>
      </div>

      <Chat key="chat" />
    </div>
  );
}