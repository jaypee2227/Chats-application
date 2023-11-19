import React from "react";
import "../styles/ChatMessages.css";
import ChatMessagesHeader from "./ChatMessagesHeader";
import Messages from "./Messages";

const ChatMessages = () => {
  return (
    <div className="chatmessages">
      <ChatMessagesHeader />
      <Messages/>
    </div>
  );
};

export default ChatMessages;
