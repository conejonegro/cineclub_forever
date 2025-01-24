import { Row, Container } from "react-bootstrap/";
import { useParams } from "react-router";
import "../css/pelicula-detalle.css";
import Video from "../components/Video";
import { useState, useEffect } from "react";
import TMDBApiCall from "../utils/TMBDApiCall";
import { Subtitles } from "../utils/subtitles";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Helmet } from "react-helmet";

function PeliculaDetalle() {
  const IMG_PATH = process.env.REACT_APP_IMG_PATH;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rDate, setRDate] = useState();
  const userDataString = localStorage.getItem("userData");
  const userData = JSON.parse(userDataString);
  const subtitles = Subtitles();
  const { slug } = useParams();

  let myPosts = posts.map((post) => {
    post.title.toLowerCase();
    return {
      original_title: post.title,
      slug: post.title.toLowerCase().replace(/\s+/g, "-"),
      id: post.id,
      poster: post.poster_path,
      sinopsis: post.overview,
      release_date: post.release_date,
      generos: post.genres,
    };
  });

  const peliculasDataLooped = myPosts.find((post) => post.slug === slug);
  const sourceFound = subtitles.find((subtitle) => subtitle.name === slug);

  const releaseDate = peliculasDataLooped?.release_date;
  const slashRDate = releaseDate?.replace(/-/g, "/");

  useEffect(() => {
    setRDate(slashRDate);

    async function fetchposts() {
      const postsFromApi = await TMDBApiCall(subtitles);
      setPosts(postsFromApi);
      setLoading(false);
    }
    fetchposts();
  }, [slashRDate]);

  //let value = "";

  /* function textAreaValue(e) {
    value = e.target.value;
    // console.log(value)
  } */

  /* function postComment() {
    // console.log(value)
    localStorage.setItem("comment", value);
  }
*/

  // Encontrar en que posicion esta  nuestro slug y capturar el siguiente

  console.log("misposts", myPosts);
  let index = myPosts.findIndex((post) => {
    return post.slug === slug;
  });
  console.log("miindex", index);
  // Si el índice no es válido (es -1 si no encontró el slug), establecemos el índice en 0.
  if (index === -1) {
    index = 0;
  }
  // Definir el siguiente y el anterior post, con controles adicionales
  const nextPost = myPosts[(index + 1) % myPosts.length]; // Esto asegura que vuelva al inicio si es el último
  const prevPost = myPosts[(index - 1 + myPosts.length) % myPosts.length]; // Esto asegura que vuelva al final si es el primero
  //console.log("nextpost", nextPost);

  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
    console.log("rating", rating);
  };

  return (
    <>
      {!loading && peliculasDataLooped && (
        <Helmet>
          <meta
            name="description"
            content="Join Cineclub Forever in Guadalajara, Jalisco, Mexico, for a unique cinematic experience! Discover classic and indie films with fellow movie lovers. Watch, discuss, and enjoy film screenings every week!"
          />
          <meta property="og:title" content="Peliculas en Cineclub Forever" />
          <meta
            property="og:description"
            content="Join Cineclub Forever in Guadalajara, Jalisco, Mexico"
          />
          <meta
            property="og:image"
            content={`${IMG_PATH + peliculasDataLooped.poster}`}
          />
          <title>{`Película: ${peliculasDataLooped.original_title} | Cineclub Forever`}</title>
          <link rel="canonical" href="https://cineclub-forever.web.app/" />
        </Helmet>
      )}
      {loading ? (
        "loading"
      ) : (
        <section
          className="main-movie-banner"
          style={{
            backgroundImage: `url(${IMG_PATH + peliculasDataLooped.poster})`,
          }}
        >
          <div className="banner-support">
            <Container className="container">
              <Row>
                <div className="col-lg-4 poster">
                  <img
                    src={IMG_PATH + peliculasDataLooped.poster}
                    alt="Poster descriptivo"
                  />
                </div>
                <div className="col-lg-8 movie-info">
                  <div className="titulo-pelicula">
                    <h1>{peliculasDataLooped.original_title}</h1>
                    <span>({peliculasDataLooped.generos[0].name})</span>
                    {/* <p>{peliculasDataLooped.genero}</p> */}
                  </div>
                  <p>{peliculasDataLooped.sinopsis}</p>

                  <p>
                    <b>Fecha de Lanzamiento:</b> {rDate}
                  </p>
                  <p>
                    <b>Genero:</b>{" "}
                    {peliculasDataLooped.generos.map((genero) => {
                      return genero.name + ", ";
                    })}
                  </p>
                </div>
               
              </Row>
              <div className="rate-this--container">
                <span className="rate-this--span">Califica esta pelicula</span>
                <div className="rating">
                  {[...Array(5)].map((star, index) => {
                    return (
                      <span
                        key={index}
                        className={`star ${index < rating ? "selected" : ""}`}
                        onClick={() => handleStarClick(index)}
                        style={{ cursor: "pointer", color: index < rating ? "gold" : "gray" }}
                      >
                        &#9733;
                      </span>
                    );
                  })}
                </div>
                </div>
            </Container>
          </div>
          {userData ? (
            <Video
              url={sourceFound?.videoSrc}
              subtitle={sourceFound?.subtitlePath}
            />
          ) : (
            <h5 className="inicia-sesion">
             Hola!, Inicia Sesion para ver la Pelicula...
            </h5>
          )}
          <div className="previous-next__post">
            <Container className="links__container">
              <div>
                <Link to={`/peliculas-detalle/${prevPost.slug}`}>
                  <GrPrevious /> Anterior
                </Link>
              </div>
              <div>
                <Link to={`/peliculas-detalle/${nextPost.slug}`}>
                  Siguiente <GrNext />
                </Link>
              </div>
            </Container>
          </div>
        </section>
      )}
    </>
  );
}
export default PeliculaDetalle;
