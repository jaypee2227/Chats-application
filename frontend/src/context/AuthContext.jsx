import { createContext, useCallback, useEffect, useState } from "react";
import { verifyTokenLogin } from "../utils/services";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tokenInfo, setTokenInfo] = useState(null);
  
  useEffect(()=>{
    const userName = localStorage.getItem("userInfo")
    const token = localStorage.getItem("user")
    setUser(userName)
    const config = { headers: { Authorization: "Bearer " + token} };
    axios.get(verifyTokenLogin, config)
  },[tokenInfo])

  const logoutUser = useCallback(()=>{
    localStorage.removeItem("userInfo")
    localStorage.removeItem("user")
    setUser(null)
    setTokenInfo(null)
  },[])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        tokenInfo,
        setTokenInfo,
        logoutUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
