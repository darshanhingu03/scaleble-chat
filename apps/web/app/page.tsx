"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import Classes from "./page.module.css";
export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");
  return (
    <div>
      <div>
        <input
          className={Classes["chat-input"]}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message....."
        />
        <button
          onClick={() => sendMessage(message)}
          className={Classes["button"]}
        >
          Send
        </button>
      </div>
      <div>
        <h1>All Messages will appear here</h1>
        <br />
        {messages.map((e) => (
          <li>{e}</li>
        ))}
      </div>
    </div>
  );
}
