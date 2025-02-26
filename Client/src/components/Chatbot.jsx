/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SendHorizontal } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { useUser } from "@clerk/clerk-react";
import socket from "../socket";
import { useAuth } from "@clerk/clerk-react";
const Chatbot = () => {
  const [chats, setChats] = useState([
    { user: "Admin", message: "Hello, How can I help you?" },
  ]);
  const [message, setMessage] = useState("");
  const scroll = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message === "") return;
    setChats([...chats, { user: "You", message: message }]);
    setMessage("");
  };
  const [userId, setUserId] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [messages, setMessages] = useState([
    { user: "Admin", message: "Hello, How can I help you?" },
  ]);
  const user = useAuth();
  useEffect(() => {
    // Register the user with a unique ID (replace with actual user ID logic)
    // const randomUserId = user.userId;
    const randomUserId =  `user-${Math.floor(Math.random() * 1000)}`;
    setUserId(randomUserId);
    socket.emit("register", randomUserId);

    // Listen for private messages
    socket.on("privateMessage", ({ message, senderId }) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        `From ${senderId}: ${message}`,
      ]);
      setChats([...chats,{
        user:senderId,
        message:message
      }])
    });

    return () => {
      socket.off("privateMessage");
    };
  }, [chats]);
  const sendPrivateMessage = () => {
    if (recipientId && message.trim()) {
      socket.emit("privateMessage", { recipientId, message });
      setMessages((prevMessages) => [
        ...prevMessages,
        `You to ${recipientId}: ${message}`,
      ]);
      setChats([...chats,{
        user:"You",
        message:message
      }])
      setMessage("");
    }
  };
  return (
    <div className=" flex flex-col justify-center items-center w-full h-screen z-12 gap-2">
      <div className="w-full text-center text-3xl bg-slate-600/20 px-10 py-4 -mt-[150px] ">
        {user.firstName}
      </div>
      <ScrollArea className="w-[100%] h-[50%] px-12 mt-20">
        <div ref={scroll}>
          {chats.map((chat) => {
            return (
              <div
                key={Math.random() * 1000}
                className="flex-col text-black justify-center items-center   m-2 rounded-md"
              >
                <span className="text-[12px] text-teal-100 ">{chat.user}</span>{" "}
                <p className="text-white bg-slate-800/0.5 py-1 pl-2 text-2xl rounded-sm bg-slate-700/10">
                  {chat.message}
                </p>
              </div>
            );
          })}
        </div>
      </ScrollArea>
      <input
        type="text"
        placeholder="Recipient ID"
        value={recipientId}
        onChange={(e) => setRecipientId(e.target.value)}
        className="text-slate-300"
      />
      <div className="flex w-full px-12 py-6 items-center space-x-2  bottom-12">
        <Input
          className="w-full"
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={sendPrivateMessage} variant="secondary">
          <SendHorizontal />
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chatbot;
