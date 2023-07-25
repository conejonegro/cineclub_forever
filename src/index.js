import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import Pelicula from "./components/Pelicula";
import peliculasData from "./json/peliculasData.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "./components/Footer";
import Testonav from "./components/Testonav";
import "./css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
// import AppiCall from "./components/ApiCall";
import PeliculaDetalle from "./pages/pelicula-detalle";
import Videos from "./pages/Videos";

const root = ReactDOM.createRoot(document.getElementById("root"));
let peliculasDataArraySliced = Object.values(peliculasData).slice(0, 4);
const peliculasDataArray = Object.values(peliculasData);
const pelicula1 = {
  id: 1,
  nombre: "Donnie Darko",
  sinopsis: "Un adolescente que experimenta visiones de un conejo gigante y se ve envuelto en un extraño universo paralelo mientras intenta descifrar el significado de su vida y su destino",
  director: "Jake Gylenhall",
  fecha_lanzamiento: "4 diciembre",
  genero: "Drama",
  poster: "https://m.media-amazon.com/images/M/MV5BZjZlZDlkYTktMmU1My00ZDBiLWFlNjEtYTBhNjVhOTM4ZjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
}
const objeto_con_objetos = {
  "el_padrino": {
    "id": 1,
    "nombre": "El Padrino",
    "sinopsis": "La familia Corleone es una de las más poderosas de Nueva York en 1945.",
    "poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  "donnie_darko": {
      "id": 2,
      "nombre" : "Donnie Darko",
      "sinopsis" : "Un adolescente que experimenta visiones de un conejo gigante y se ve envuelto en un extraño universo paralelo mientras intenta descifrar el significado de su vida y su destino",
      "poster": "https://m.media-amazon.com/images/M/MV5BZjZlZDlkYTktMmU1My00ZDBiLWFlNjEtYTBhNjVhOTM4ZjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
  }
}
const arreglo_del_objeto_padre = Object.values(objeto_con_objetos);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Testonav />
      <Routes>
{/* ////////////////////ROUTE 1 HOME */}
        <Route
          path="/" element={
            <>
              <HomePage titulo="Ultimas Peliculas agregadas" />
              <Container id="peliculasCont">
                <Row className="justify-content-between ">

                  {peliculasDataArraySliced.map((pelicula) => (
                    <Pelicula key={pelicula.nombre} datos={pelicula} />
                  ))}

                </Row>
              </Container>
            </>
          }
        />
{/* ////////////////////ROUTE 2 TODAS LAS PELICULAS */}
        <Route
          path="/peliculas"
          element={
            <>
              <Container>
                <Row className="justify-content-between ">
                  <HomePage titulo="Todas las Peliculas" />
                  {peliculasDataArray.map((pelicula) => (
                    <Pelicula key={pelicula.id} datos={pelicula} />
                  ))}
                </Row>
              </Container>
            </>
          }
        />
        {/* ////////////////////ROUTE 3 */}
        <Route path="/contacto" element={<Contacto />} />
{/* ROUTE PELICULA DETALLE */}
        <Route
          path={`/peliculas-detalle/${pelicula1.id}`}
          // `/peliculas-detalle/${datos.id}`}
          element={
            <>
             
                <PeliculaDetalle datos={arreglo_del_objeto_padre} />
           
            </> 

          }
        />
        <Route path="/videos" element={<Videos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    {/* <AppiCall /> */}
  </React.StrictMode>
);
