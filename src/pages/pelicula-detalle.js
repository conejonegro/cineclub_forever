import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
// import { useParams } from "react-router-dom";
import "../css/pelicula-detalle.css";
// import axios from 'axios';

// const url = new URL(window.location.href);
// const ID_pelicula = url.pathname.split('-').pop();
const datos = {
    "el_padrino": {
      "id": 1,
      "nombre": "El Padrino",
      "sinopsis": "La familia Corleone es una de las más poderosas de Nueva York en 1945.",
      "director": "Francis Ford Coppola",
      "release_date": "1984",
      "genero": "Drama, History",
      "poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    }
  }
  console.log(datos);

function PeliculaDetalle(){
    // const { peliculaId } = useParams();
    // const pelicula = datos[peliculaId];
    //     const client = axios.create({
    //     baseURL: "https://cineclub-forever-default-rtdb.firebaseio.com/peliculas.json"
    // })
    
    return(
        <section className="main-movie-banner">
            <div className="banner-support">
                <Container className="">
                    <Row>
                    <div className="col-lg-4 poster">
                            <img src={datos.el_padrino.poster} alt="Poster descriptivo" />
                        </div>
                        <div className="col-lg-8 movie-info">
                        
                        <div className="titulo-pelicula"><h1>{datos.el_padrino.nombre}</h1><span>({datos.el_padrino.release_date})</span><p>{datos.el_padrino.genero}</p></div>
                       
                        <p>{datos.el_padrino.sinopsis}</p>
                        <p>{datos.el_padrino.director}</p>
                        
                        <p><b>Fecha de Lanzamiento</b> {datos.fecha_lanzamiento}</p>
                        </div>
                        
                    </Row>
                    
                    
                </Container>
            </div>
        </section>
         
    )
   
}

export default PeliculaDetalle;