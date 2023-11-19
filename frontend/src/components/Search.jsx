import React from "react";
import "../styles/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" className="input" placeholder="Find a User" />
        <IconButton className="searchBtn" color="primary">
          <SearchIcon />
        </IconButton>
      </div>
      <div className="userChat">
        <div className="circle">
          <h1 className="letter">J</h1>
        </div>
        <div className="userChatInfo">
          <span className="name">Jane</span>
          <p className="msg">Text Message</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
