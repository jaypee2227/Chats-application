import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tokenInfo, setTokenInfo] = useState(null);
  
  useEffect(()=>{
    const userName = localStorage.getItem("userInfo")
    setUser(userName)
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
