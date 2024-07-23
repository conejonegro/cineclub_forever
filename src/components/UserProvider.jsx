import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
   // console.log("provider");
  
    const [user, setUser] = useState(false);
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };

export  { UserProvider };