import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import CineclubRoutes from "./components/CineclubRoutes";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

        <CineclubRoutes />
    
);
