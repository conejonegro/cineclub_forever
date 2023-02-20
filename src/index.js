import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import Pelicula from './components/Pelicula';
import peliculasData from './json/peliculasData.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from './components/Footer';
import Testonav from './components/Testonav';
import './css/index.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Contacto from './pages/Contacto';
import AppiCall from './components/ApiCall';
//test


const root = ReactDOM.createRoot(document.getElementById('root'));
const peliculasDataArray = Object.values(peliculasData).slice(0, 4);
root.render(
  <React.StrictMode>

<BrowserRouter>
      <Testonav />
      <Routes>
        <Route path="/" element={
          <>
          <HomePage />
            <Container id='peliculasCont'>
              <Row className='justify-content-between '>
                {peliculasDataArray.map(pelicula => (

                  <Pelicula key={pelicula.nombre} datos={pelicula} />

                ))}
              </Row>
            </Container>

          </>
        } />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    <AppiCall />

  </React.StrictMode>
);


