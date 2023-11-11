import axios from "axios";
import React, { useEffect, useState } from "react";
import { getUsers } from "../utils/services";

const Chat = () => {
  const[newUsers,setNewUsers] = useState({})
  useEffect(() => {
    const token = localStorage.getItem("user");
    const config = { headers: { Authorization: "Bearer " + token } };
    axios.get(getUsers, config).then(async (res)=>{ await setNewUsers(res)
    console.log(setNewUsers)})
  }, []);
  return <>
  {
    // users.map(user=>{
    //   <div key={user._id}>
    //     <h1>{user.name}</h1>
    //   </div>
    // })
  }
  </>;
};

export default Chat;
