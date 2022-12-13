import * as React from "react";
import styles from "../../style/ChattingStyle.module.css";
import { ArrowLeft, User, LogOut, Database } from "react-feather";
import { ChatMessage } from "./ChatMessage";
import { ChatMessageSend } from "./ChatMessageSend";

export function ChatContainer() {
  const items = [
    {
      type: "recv",
      name: "사과도리|사회학과21",
      text: "안녕하세요",
      time: "오후 2시 3분",
    },
    {
      type: "recv",
      name: "사과도리|사회학과21",
      text: "안녕하세요222",
      time: "오후 2시 3분",
    },
    {
      type: "send",
      name: "사과도리|사회학과21",
      text: "안녕하세요333",
      time: "오후 2시 3분",
    },
    {
      type: "recv",
      name: "사과도리|사회학과21",
      text: "안녕하세요",
      time: "오후 2시 3분",
    },
    {
      type: "recv",
      name: "사과도리|사회학과21",
      text: "안녕하세요222",
      time: "오후 2시 3분",
    },
    {
      type: "send",
      name: "사과도리|사회학과21",
      text: "안녕하세요333",
      time: "오후 2시 3분",
    },
    {
      type: "send",
      name: "사과도리|사회학과21",
      text: "안녕하세요333",
      time: "오후 2시 3분",
    },
    {
      type: "send",
      name: "사과도리|사회학과21",
      text: "안녕하세요333",
      time: "오후 2시 3분",
    },
    {
      type: "send",
      name: "사과도리|사회학과21",
      text: "안녕하세요333",
      time: "오후 2시 3분",
    },
    {
      type: "send",
      name: "사과도리|사회학과21",
      text: "안녕하세요333",
      time: "오후 2시 3분",
    },
  ];

  return (
    <div className={styles.ChattingContainer}>
      {items.map((item) =>
        item.type === "recv" ? (
          <ChatMessage name={item.name} text={item.text} time={item.time} />
        ) : (
          <ChatMessageSend name={item.name} text={item.text} time={item.time} />
        )
      )}
    </div>
  );
}
