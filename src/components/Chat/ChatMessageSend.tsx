import * as React from "react";
import styles from "../../style/ChattingStyle.module.css";
import { ArrowLeft, User, LogOut } from "react-feather";

interface IChatMessageSendProps {
  name: string;
  text: string;
  time: string;
}

export function ChatMessageSend({ name, text, time }: IChatMessageSendProps) {
  return (
    <div className={styles.ChattingMessageSend}>
      <div className={styles.ChattingContentSend}>
        <div className={styles.ChattingContentSendName}>{name}</div>
        <div className={styles.ChattingContentSendText}>{text}</div>
        <div className={styles.ChattingContentSendTime}>{time}</div>
      </div>
      <div className={styles.ChattingProfileSend}></div>
    </div>
  );
}
