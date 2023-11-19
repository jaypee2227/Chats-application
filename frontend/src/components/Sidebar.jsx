import React from "react";
import "../styles/Sidebar.css";
import Search from "./Search";
import ChatMembers from "./ChatMembers";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Search />
      <ChatMembers />
    </div>
  );
};

export default Sidebar;
