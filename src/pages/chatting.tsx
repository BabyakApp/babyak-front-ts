import * as React from "react";
import MenuFooter from "../components/menuFooter";
import styles from "../style/ChattingStyle.module.css";
import { ArrowLeft, User, LogOut } from "react-feather";
import { ChatHeader } from "../components/Chat/ChatHeader";
import { ChatInput } from "../components/Chat/ChatInput";
import { ChatContainer } from "../components/Chat/ChatContainer";
import { type } from "os";
import { MenuItem, Select } from "@mui/material";

const StompJs = require("@stomp/stompjs");

export interface IChatMessage {
  type: "recv" | "send";
  name: string;
  text: string;
  time: string;
}

export default function Chatting() {
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

  const client = React.useRef<any>({});

  const connect = () => {
    // 연결할 때
    client.current = new StompJs.Client({
      brokerURL: "ws://3.36.207.252:8080/ws-stomp",
      onConnect: () => {
        //subscribe(); // 연결 성공 시 구독하는 로직 실행
        console.log("연결 성공");
      },
    });
    client.current.activate(); // 클라이언트 활성화
  };

  const disconnect = () => {
    // 연결이 끊겼을 때
    console.log("연결 실패");
  };

  React.useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  return (
    <div className={styles.ChattingWrapper}>
      <ChatHeader />
      <ChatContainer items={items} />
      <ChatInput setItems={setItems} />
    </div>
  );
}
