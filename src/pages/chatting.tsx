import * as React from "react";
import MenuFooter from "../components/menuFooter";
import styles from "../style/ChattingStyle.module.css";
import { ArrowLeft, User, LogOut } from "react-feather";
import { ChatHeader } from "../components/Chat/ChatHeader";
import { ChatInput } from "../components/Chat/ChatInput";
import { ChatContainer } from "../components/Chat/ChatContainer";
import { type } from "os";
import { MenuItem, Select } from "@mui/material";

export interface IChatMessage {
  type: "recv" | "send";
  name: string;
  text: string;
  time: string;
}

export function Chatting() {
  const [items, setItems] = React.useState<IChatMessage[]>([
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
      name: "붐바음악|음악학과21",
      text: "안녕하세요333",
      time: "오후 2시 3분",
    },
  ]);

  return (
    <div className={styles.ChattingWrapper}>
      <ChatHeader />
      <ChatContainer items={items} />
      <ChatInput setItems={setItems} />
    </div>
  );
}

export default Chatting;
