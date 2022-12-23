import * as React from "react";
import styles from "../../style/ChattingStyle.module.css";
import { ArrowLeft, User, LogOut, Database } from "react-feather";
import { ChatMessage } from "./ChatMessage";
import { ChatMessageSend } from "./ChatMessageSend";
import { IChatMessage } from "pages/chatting";

interface IChatContainerProps {
  items: IChatMessage[];
}

export function ChatContainer({ items }: IChatContainerProps) {
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
