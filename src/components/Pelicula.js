import '../css/pelicula.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Pelicula({datos}) {
  // const peliculasDataArray = Object.values(datos);
 
  return (
          <div className="main-container-pelicula col-md-6 col-xl-4 col-xxl-3" >
            <div className='movie-container'>
              <Link to={`/peliculas-detalle/${datos.id}`} >
                <img src={datos.poster} alt={datos.nombre} className="poster " />
              </Link>
                <h2>{datos.nombre}</h2>
                <p>{datos.sinopsis}</p>
              </div>
          </div>
  );
  
}

export default Pelicula; 
