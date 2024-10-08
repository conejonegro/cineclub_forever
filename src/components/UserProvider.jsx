import { createContext, useState,useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
   // console.log("provider");
  
    const [user, setUser] = useState(false);
    const darkmodeStateFromLocal = localStorage.getItem("darkmode") === "true";
    const [darkMode, setDarkMode] = useState(darkmodeStateFromLocal);

    useEffect(() => {
      localStorage.setItem("darkmode", darkMode);
      if (darkMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    }, [darkMode]);
  
    return (
      <UserContext.Provider value={{ user, setUser, darkMode, setDarkMode }}>
        {children}
      </UserContext.Provider>
    );
  };

export  { UserProvider };