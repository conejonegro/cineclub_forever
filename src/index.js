import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import {Pelicula} from "./components/Pelicula";
import peliculasData from "./json/peliculasData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "./components/Footer";
import Testonav from "./components/Testonav";
import "./css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import AppiCall from "./components/ApiCall";
import PeliculaDetalle from "./pages/pelicula-detalle";
import Videos from "./pages/Videos";


const root = ReactDOM.createRoot(document.getElementById("root"));
 let peliculasDataArraySliced = Object.values(peliculasData).slice(0, 4);
const peliculasDataArray = Object.values(peliculasData);

root.render(

    <BrowserRouter>
      <Testonav />
      <Routes>

        <Route path="/" element= {<HomePage titulo="Ultimas Peliculas agregadas" json={peliculasData} />} />
        <Route path="/peliculas" element={ <Pelicula titulo="Todas las Peliculas" json={peliculasData} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/peliculas-detalle/:slug" element={ <PeliculaDetalle /> } />
        <Route path="/videos" element={<Videos />} />

      </Routes>
      <Footer />
    </BrowserRouter>
    // {/* <AppiCall /> */}

);
