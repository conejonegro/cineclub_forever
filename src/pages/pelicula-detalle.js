import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import "../css/pelicula-detalle.css";

// const url = new URL(window.location.href);
// const ID_pelicula = url.pathname.split('-').pop();

function PeliculaDetalle({datos}){
    // const { peliculaId } = useParams();
    // const pelicula = datos[peliculaId];


  
    return(
        <Container className="mt-4">
            <Row>
                <div className="col-lg-8">
                <h1>{datos.nombre}</h1>
                <p>{datos.sinopsis}</p>
                </div>
                <div className="col-lg-4 poster">
                    <img src={datos.poster} alt={datos.nombre} />
                </div>
            </Row>
            
             
        </Container>
         
    )
   
}



export default PeliculaDetalle;