import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import CineclubRoutes from "./components/CineclubRoutes";
import { UserProvider } from "./components/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
const userDataString = localStorage.getItem('userData');
const userData = JSON.parse(userDataString);

root.render(

        <UserProvider>
            <CineclubRoutes />
        </UserProvider>
    // {/* <AppiCall /> */}
  
);
