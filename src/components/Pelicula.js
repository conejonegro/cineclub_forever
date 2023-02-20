import '../css/pelicula.css';
import React from 'react';
// import Col from 'react-bootstrap/Col';

function Pelicula({datos}) {
  return (
          <div className="main-container-pelicula col-md-6 col-xl-4 col-xxl-3" >
            <div className='movie-container'>
                <img src={datos.poster} alt={datos.nombre} className="poster " />
                <h2>{datos.nombre}</h2>
                <p>{datos.sinopsis}</p>
              </div>
          </div>
  );
}

export default Pelicula; 
