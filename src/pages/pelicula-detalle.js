import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import "../css/pelicula-detalle.css";
import peliculasData from "../json/peliculasData";
import Video from "../components/Video";

function PeliculaDetalle(){
     const { slug } = useParams();
     const peliculasDataLooped = peliculasData.find((post) => (post.slug === slug));
    //  console.log(peliculasDataLooped);
    //  console.log(slug);
    
    return(
        <section className="main-movie-banner" style={{backgroundImage: `url(${peliculasDataLooped.poster})`}}>
            <div className="banner-support">
                <Container className="container">
                    <Row>
                        <div className="col-lg-4 poster">
                            <img src={peliculasDataLooped.poster} alt="Poster descriptivo" />
                        </div>
                        <div className="col-lg-8 movie-info">
                            <div className="titulo-pelicula">
                                <h1>{peliculasDataLooped.nombre}</h1><span>({peliculasDataLooped.release_date})</span>
                                {/* <p>{peliculasDataLooped.genero}</p> */}
                            </div>
                            <p>{peliculasDataLooped.sinopsis}</p> 
                            {/* <p>{peliculasDataLooped.director}</p> */}
                            <p><b>Fecha de Lanzamiento</b> {peliculasDataLooped.release_date}</p>
                        </div>
                    </Row>   
                </Container>
            </div>
            <Video url={peliculasDataLooped.video_url} subtitles={peliculasDataLooped.subtitles} />
        </section>
    )
   
}


export default PeliculaDetalle;