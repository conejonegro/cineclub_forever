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
// import TmdbApiCall from "./components/TmdbAPICall";
import Login from "./pages/Login";
// import Profile from "./components/Profile";
import Logout from "./components/Logout";
import LoginPassword from "./pages/LoginPassword";
import SignIn from "./pages/SignIn";
import ProtectedRoutes from "./components/ProtecteRoutes";
import { navItemsLogin } from "./components/NavComponent";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    <BrowserRouter>
      <NavComponent />
      <Routes>

        <Route path="/" element= {<HomePage titulo="Ultimas Peliculas agregadas" json={peliculasData} />} />
        <Route path="/peliculas" element={ <Pelicula titulo="Todas las Peliculas" json={peliculasData} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/peliculas-detalle/:slug" element={ <PeliculaDetalle /> } />
        {/* <Route path="/api-test" element={ <TmdbApiCall /> } /> */}
        <Route path="/login" element={ <ProtectedRoutes> <Login /> </ProtectedRoutes>  } />
        <Route path="/sign-in" element={ <SignIn /> } />
        <Route path="/profile" element={ <Logout /> } />
        {/* <Route path="/profile" element={ <Profile /> } /> */}
        <Route path="*" element={<p>Not Found 404</p>} />

      </Routes>
      <Footer />
    </BrowserRouter>
    // {/* <AppiCall /> */}
  
);
