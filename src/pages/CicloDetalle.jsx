import { Container, Row } from "react-bootstrap";
import { CiclosJSON } from "../utils/ciclos/Ciclos";
import { useParams } from "react-router-dom";
import TMDBApiCall from "../utils/TMBDApiCall";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/ciclo-detalle.css";

export const CicloDetalle = () => {

  const [peliculasEnCiclo, setPeliculasEnCiclo] = useState([]);
  const ciclosArray = CiclosJSON();
  const slug = useParams().slug;
  const location = useLocation(); // Obtiene la ruta actual
  const IMG_PATH = process.env.REACT_APP_IMG_PATH;
  const cicloFound = ciclosArray.find(
    (ciclo) => ciclo.nombre.toLowerCase() === slug
  );

  useEffect(() => {
    async function fetchData() {
      const ciclosData = await TMDBApiCall(cicloFound.peliculas);
      setPeliculasEnCiclo(ciclosData);
      //console.log("my data array", ciclosData);
    }
    fetchData();
  }, [location.pathname]);

  console.log("ese", peliculasEnCiclo)

  return (
    <Container className="ciclos__main-container my-4">

        <h1>Ciclo: {cicloFound.nombre}</h1>
        <Row className="justify-content-center todas-peliculas-imdb">
        {peliculasEnCiclo.map((post) => (
          <div className="movie-container" key={post.id}>
            <div>
              <img
                src={IMG_PATH + post.poster_path}
                alt={post.nombre}
                className="poster "
              />
              <h2>{post.title}</h2>
             {/* <span className="propuesta__por-text">{ciclo.propuestaPor}</span> */} 
             
            </div>
          </div>
        ))}
        </Row>
    </Container>
  );
};
