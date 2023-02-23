import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import "../css/pelicula-detalle.css";

function PeliculaDetalle({datos}){
    return(
        <Container className="mt-4">
            <Row>
                <div className="col-lg-8">
                <h1>{datos.nombre}</h1>
                <p>{datos.sinopsis}</p>
                </div>
                <div className="col-lg-4 poster">
                    <img src={datos.poster} />
                </div>
            </Row>
            
            
        </Container>
    )
}
export default PeliculaDetalle;