import React from "react";
import { IconButton } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import "../styles/ChatMessagesHeader.css";

const ChatMessagesHeader = () => {
  return (
    <div className="chatMessageHeader">
      <div className="chatInfo">
        <h1 className="nameHeading">Jane</h1>
        <div className="chatIcons">
          <IconButton>
            <CallIcon color="primary" fontSize="large" />
          </IconButton>
          <IconButton>
            <VideocamIcon color="primary" fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ChatMessagesHeader;
