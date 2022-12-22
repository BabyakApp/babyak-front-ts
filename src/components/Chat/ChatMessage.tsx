import * as React from "react";
import styles from "../../style/ChattingStyle.module.css";
import { ArrowLeft, User, LogOut } from "react-feather";

interface IChatMessageProps {
  name: string;
  text: string;
  time: string;
}

export function ChatMessage({ name, text, time }: IChatMessageProps) {
  return (
    <div className={styles.ChattingMessage}>
      <div className={styles.ChattingProfile}></div>
      <div className={styles.ChattingContent}>
        <div className={styles.ChattingContentName}>{name}</div>
        <div className={styles.ChattingContentText}>{text}</div>
        <div className={styles.ChattingContentTime}>{time}</div>
      </div>
    </div>
  );
}
