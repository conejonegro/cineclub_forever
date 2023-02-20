import Container from "react-bootstrap/esm/Container";

function PeliculaDetalle({datos}){
    return(
        <Container>
            <h1>{datos.nombre}</h1>
            <p>{datos.sinopsis}</p>
            {/* <img src={datos.poster} /> */}
        </Container>
    )
}
export default PeliculaDetalle;