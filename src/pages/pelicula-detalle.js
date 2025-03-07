import { Row, Container } from "react-bootstrap/";
import { useParams } from "react-router";
import "../css/pelicula-detalle.css";
import Video from "../components/Video";
import { useState, useEffect, useMemo } from "react";
import TMDBApiCall from "../utils/TMBDApiCall";
import { Subtitles } from "../utils/subtitles";
import { Link } from "react-router-dom";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Helmet } from "react-helmet";
// Temporalmente comentamos la importación de créditos para aislar el problema
 import getCredits from "../utils/TMDB_credits_call.jsx";

function PeliculaDetalle() {
  const IMG_PATH = process.env.REACT_APP_IMG_PATH;
  const [posts, setPosts] = useState([]);
  // Temporalmente eliminamos el estado de créditos
   const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rDate, setRDate] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  
  const userDataString = localStorage.getItem("userData");
  const userData = JSON.parse(userDataString);
  // Usamos useMemo para asegurarnos de que subtitles no cambie en cada renderizado
  const subtitles = useMemo(() => Subtitles(), []);
  const { slug } = useParams();

  // Primer useEffect - carga inicial de datos
  useEffect(() => {
    async function fetchPosts() {
      try {
        const postsFromApi = await TMDBApiCall(subtitles);
        setPosts(postsFromApi);
        setLoading(false);
        console.log(postsFromApi);
      } catch (error) {
        console.error("Error al obtener los posts:", error);
        setLoading(false);
      }
    }
    fetchPosts();
  }, []); 

  // Usamos useMemo para calcular myPosts solo cuando posts cambia
  const myPosts = useMemo(() => {
    return posts.map((post) => ({
      original_title: post.title,
      slug: post.title.toLowerCase().replace(/\s+/g, "-"),
      id: post.id,
      poster: post.poster_path,
      sinopsis: post.overview,
      release_date: post.release_date,
      generos: post.genres,
    }));
  }, [posts]);

  // Usamos useMemo para encontrar la película actual solo cuando myPosts o slug cambian
  const peliculaActual = useMemo(() => {
    return myPosts.find((post) => post.slug === slug) || {};
  }, [myPosts, slug]);

  // Usamos useMemo para encontrar sourceFound solo cuando subtitles o slug cambian
  const sourceFound = useMemo(() => {
    return subtitles.find((subtitle) => subtitle.name === slug);
  }, [subtitles, slug]);

  // Calcular índice y posts adyacentes
  const index = useMemo(() => {
    return myPosts.findIndex((post) => post.slug === slug);
  }, [myPosts, slug]);

  const nextPost = useMemo(() => {
    if (index === -1) return {};
    return myPosts[(index + 1) % myPosts.length] || {};
  }, [myPosts, index]);

  const prevPost = useMemo(() => {
    if (index === -1) return {};
    return myPosts[(index - 1 + myPosts.length) % myPosts.length] || {};
  }, [myPosts, index]);

  // Actualizar fecha cuando cambia la película actual
  useEffect(() => {
    if (peliculaActual.release_date) {
      setRDate(peliculaActual.release_date.replace(/-/g, "/"));
      console.log(peliculaActual.release_date);
    } else {
      setRDate(null);
    }
  }, [peliculaActual.release_date]);

  // Actualizar mensaje de alerta cuando cambia sourceFound
  useEffect(() => {
    if (sourceFound) {
      setAlertMessage(
        <>
          Esta película fue propuesta por <strong>{sourceFound.propuestaPor}</strong> en el ciclo <strong>{sourceFound.ciclo}</strong> y será retirada en dos meses.
        </>
      );
      console.log(sourceFound);
    } else {
      setAlertMessage(null);
    }
  }, [sourceFound]);

  // Temporalmente eliminamos el useEffect para obtener créditos
  
  useEffect(() => {
    if (peliculaActual.id) {
      async function fetchCredits() {
        try {
          const fetchedCredits = await getCredits(peliculaActual.id);
          setCredits(fetchedCredits);
          console.log(fetchedCredits);
        } catch (error) {
          console.error("Error al obtener créditos:", error);
        }
      }
      fetchCredits();
    }
  }, [peliculaActual.id]);
  

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <section
          className="main-movie-banner"
          style={{ backgroundImage: `url(${IMG_PATH + (peliculaActual.poster || "")})` }}
        >
          <Helmet>
            <meta name="description" content="Join Cineclub Forever in Guadalajara..." />
            <meta property="og:title" content="Peliculas en Cineclub Forever" />
            <meta property="og:image" content={`https://mcseguros.com.mx/cineclub/posters/${peliculaActual.original_title || "default"}.jpg`} />
            <title>{`Película: ${peliculaActual.original_title || ""} | Cineclub Forever`}</title>
            <link rel="canonical" href="https://cineclub-forever.web.app/" />
          </Helmet>
          <div className="banner-support">
            <Container className="container">
              <Row>
                <div className="col-lg-4 poster">
                  <img src={IMG_PATH + (peliculaActual.poster || "")} alt="Poster descriptivo" />
                </div>
                <div className="col-lg-8 movie-info">
                  <h1>{peliculaActual.original_title}</h1>
                  {/* Temporalmente eliminamos la línea del director */}
                   <p><b>Director:</b> {credits?.name || "Desconocido"}</p> 
                  
                  <p><b>Fecha de Lanzamiento:</b> {rDate}</p>
                  <p><b>Género:</b> {(peliculaActual.generos || []).map((g) => g.name).join(", ")}</p>
                  <p>{peliculaActual.sinopsis}</p>
                  <div className="alert-box"><p>{alertMessage}</p></div>
                </div>
              </Row>
            </Container>
          </div>
          {userData ? (
            <Video url={sourceFound?.videoSrc} subtitle={sourceFound?.subtitlePath} key={slug} />
          ) : (
            <h5 className="inicia-sesion">Hola!, Inicia Sesión para ver la Película...</h5>
          )}
          <div className="previous-next__post">
            <Container className="links__container">
              <div>
                <Link to={`/peliculas-detalle/${prevPost.slug || ""}`}><GrPrevious /> Anterior</Link>
              </div>
              <div>
                <Link to={`/peliculas-detalle/${nextPost.slug || ""}`}>Siguiente <GrNext /></Link>
              </div>
            </Container>
          </div>
        </section>
      )}
    </>
  );
}

export default PeliculaDetalle;