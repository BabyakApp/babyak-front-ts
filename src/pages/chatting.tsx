import * as React from "react";
import MenuFooter from "../components/menuFooter";
import styles from "../style/ChattingStyle.module.css";
import { ArrowLeft, User, LogOut } from "react-feather";
import { ChatHeader } from "../components/Chat/ChatHeader";
import { ChatInput } from "../components/Chat/ChatInput";
import { ChatContainer } from "../components/Chat/ChatContainer";

export function Chatting() {
  return (
    <div className={styles.ChattingWrapper}>
      <ChatHeader />
      <ChatContainer />
      <ChatInput />
    </div>
  );
}

export default Chatting;
