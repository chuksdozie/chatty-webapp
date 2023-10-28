import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import MessageItem from "@/components/chat/MessageItem";
import { socket } from "@/utils/socket";
import Socket from "@/components/Socket";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const socket = io("ws://localhost:5000", {
    transports: ["websocket"],
  });
  const [messages, setMessages] = useState([]);
  const [myId, setMyId] = useState("");
  const [testToSend, setTextToSend] = useState("");
  const [yourId, setYourId] = useState("");
  // const

  const connectTo = () => {
    // console.log("12345678");
    if (!testToSend) return;
    socket.emit("hello", { myId, text: testToSend });
    setTextToSend("");
    // socket.
    // console.log({ socketId });
  };

  useEffect(() => {
    console.log({ socket });
    if (!socket) {
      socket.on("connect", () => {
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
      });
    }

    // socket.on("disconnect", () => {
    //   console.log(socket.id); // undefined
    // });
    socket.on("1234", (e) => {
      // if (e.socketId === socketId) {
      console.log("Received!", e);
      const newArray = [...messages];

      newArray.push(e);
      console.log({ newArray });
      setMessages(newArray);
      console.log({ res: "32323" });
      // }
    });
  }, [socket]);
  return (
    <div
      style={{
        // backgroundColor: "red",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Socket />
      <div style={{ backgroundColor: "orange", height: "50%" }}>
        <button style={{ margin: ".5rem" }} onClick={() => setMyId("23454")}>
          first user
        </button>
        <button style={{ margin: ".5rem" }} onClick={() => setMyId("432881")}>
          second user
        </button>
      </div>
      <div
        style={{
          // backgroundColor: "yellow",
          height: "100%",
          overflowY: "scroll",
        }}
      >
        <h2>Hello World</h2>
        {messages.map((message, indx) => (
          <MessageItem
            key={indx}
            message={message?.info}
            sender={myId === message?.userId}
          />
        ))}
      </div>

      <div style={{ height: "50px", display: "flex", margin: ".5rem" }}>
        <input
          type="text"
          style={{ padding: ".2rem .2rem", width: "100%" }}
          value={testToSend}
          onChange={(e) => setTextToSend(e.target.value)}
        />
        <button style={{ padding: ".2rem 1rem" }} onClick={connectTo}>
          Send
        </button>
      </div>
    </div>
  );
}
