import * as React from "react";
import styles from "../../style/ChattingStyle.module.css";
import { ArrowLeft, User, LogOut } from "react-feather";
import { ChatMessage } from "./ChatMessage";
import { ChatMessageSend } from "./ChatMessageSend";

export function ChatContainer() {
  return (
    <div className={styles.ChattingContainer}>
      <ChatMessage
        name="사과도리|사회학과21"
        text="안녕하세요"
        time="오후 2시 3분"
      />
      <ChatMessage
        name="사과도리|사회학과21"
        text="안녕하세요"
        time="오후 2시 3분"
      />
      <ChatMessageSend
        name="사과도리|사회학과21"
        text="안녕하세요"
        time="오후 2시 3분"
      />
    </div>
  );
}
