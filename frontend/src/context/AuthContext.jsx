import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerInfo, setRegisterInfo] = useState({});

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        registerInfo,
        setRegisterInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
