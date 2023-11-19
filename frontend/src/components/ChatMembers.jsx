import React from "react";
import "../styles/ChatMembers.css";

const ChatMembers = () => {
  return <>
  <div className="contain">
  <div className="userChat">
        <div className="circle">
          <h1 className="letter">B</h1>
        </div>
        <div className="userChatInfo">
          <span className="name">Bob</span>
          <p className="msg">Text Message</p>
        </div>
      </div>
      <div className="userChat">
        <div className="circle">
          <h1 className="letter">A</h1> 
        </div>
        <div className="userChatInfo">
          <span className="name">Alex</span>
          <p className="msg">Text Message</p>
        </div>
      </div>
      <div className="userChat">
        <div className="circle">
          <h1 className="letter">S</h1>
        </div>
        <div className="userChatInfo">
          <span className="name">Senthil</span>
          <p className="msg">Text Message</p>
        </div>
      </div>
      <div className="userChat">
        <div className="circle">
          <h1 className="letter">K</h1>
        </div>
        <div className="userChatInfo">
          <span className="name">Killer</span>
          <p className="msg">Text Message</p>
        </div>
      </div>  
  </div>
  </>;
};

export default ChatMembers;
