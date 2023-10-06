import React, { createContext, useState } from "react";
import User from "./user";



const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(User[0]);
  const [loggedUser, setLoggedUser] = useState("");

  // Propiedades relacionadas con el Card
  
  
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loggedUser,
        setLoggedUser,
                
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
