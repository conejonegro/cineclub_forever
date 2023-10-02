import '../css/pelicula.css';
import React from 'react';
import { Link } from 'react-router-dom';
 import peliculasData from '../json/peliculasData';
import { useLocation } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';


function Pelicula({titulo, json}) {


  // const peliculasDataLooped = peliculasData.find((post) => (post.slug === slug));
  console.log('hola params')

  // console.log(peliculasDataLooped);

  const location = useLocation();
  const isHomePage = location.pathname;
  console.log(location)
  const peliculasDataArraySliced = json.slice(0, 4);

  if (isHomePage === '/') {
    console.log('HOMEPAGE!!')
    return(
      <div id="peliculasCont">
        <h1>{titulo}</h1>
        <Row className="justify-content-between ">
          <div className="main-container-pelicula col-md-6 col-xl-4 col-xxl-3" >
            
              {peliculasDataArraySliced.map((pelicula) => (
                <div className='movie-container' key={pelicula.id}>
                  <Link to={"/peliculas-detalle/"+pelicula.slug}>
                    <img src={pelicula.poster} alt={pelicula.nombre} className="poster " />
                  
                    <h2>{pelicula.nombre}</h2>
                    <p>{pelicula.sinopsis.substring(0, 80)+'...'}</p>
                  </Link>
                </div>
              ))}
            
          </div>
        </Row>
      </div>
    )
 } else{
  console.log('else')
  return (  
    <Container id="peliculasCont">
      <h1>{titulo}</h1>
      <Row className="justify-content-between ">
        <div className="main-container-pelicula col-md-6 col-xl-4 col-xxl-3" >
          
            {json.map((pelicula) => (
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
  
  
}

export  {Pelicula}; 
