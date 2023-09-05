import '../css/pelicula.css';
import React from 'react';
import { Link } from 'react-router-dom';
import peliculasData from '../json/peliculasData';
import { Container, Row } from 'react-bootstrap';


function Pelicula() {
  // const peliculasDataArray = Object.values(datos);
 
  return (  
    <Container id="peliculasCont">
      <Row className="justify-content-between ">
        <div className="main-container-pelicula col-md-6 col-xl-4 col-xxl-3" >
          
            {peliculasData.map(pelicula => (
              <div className='movie-container' key={pelicula.id}>
                <Link to={"/peliculas-detalle/"+pelicula.slug}>
                  <img src={pelicula.poster} alt={pelicula.nombre} className="poster " />
                
                  <h2>{pelicula.nombre}</h2>
                  <p>{pelicula.sinopsis}</p>
                </Link>
              </div>
            ))}
          
        </div>
      </Row>
    </Container>
  );
  
}

export default Pelicula; 
