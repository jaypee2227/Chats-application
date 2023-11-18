import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatMessages from '../components/ChatMessages'
import "../styles/Chat.css"

const Chat = () => {
  return (
    <div className='Container'>
      <Sidebar/>
      <ChatMessages/>
    </div>
  )
}

export default Chat