import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import {Pelicula} from "./components/Pelicula";
import peliculasData from "./json/peliculasData";
import Footer from "./components/Footer";
import {NavComponent} from "./components/NavComponent";
import "./css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
//import AppiCall from "./components/ApiCall";
import PeliculaDetalle from "./pages/pelicula-detalle";
import {TmdbApiCall} from "./components/TmdbAPICall";
import Login from "./pages/Login";
// import Profile from "./components/Profile";
import Logout from "./components/Logout";
import LoginPassword from "./pages/LoginPassword";
import SignIn from "./pages/SignIn";
import ProtectedRoutes from "./components/ProtecteRoutes";
import { navItemsLogin } from "./components/NavComponent";
import { useState } from "react";
import Dashboard from "./dashboard/Dashboard";
import CineclubRoutes from "./components/CineclubRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
const userDataString = localStorage.getItem('userData');
const userData = JSON.parse(userDataString);

root.render(

    <CineclubRoutes />
    // {/* <AppiCall /> */}
  
);
