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
//import saveRating from "../components/ratings/ratings";
//import getUserRating from "../components/ratings/getUserRating";
//import getCredits from "../utils/TMDB_credits_call.jsx";

function PeliculaDetalle() {
  const IMG_PATH = process.env.REACT_APP_IMG_PATH;
  const [posts, setPosts] = useState([]);
  const [credits, setCredits] = useState();
  const [loading, setLoading] = useState(true);
  const [rDate, setRDate] = useState();
  const userDataString = localStorage.getItem("userData");
  const userData = JSON.parse(userDataString);
  const subtitles = Subtitles();
  const { slug } = useParams();

  //console.log("my cresdit", credits);

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
     // const credits = await getCredits(1059128);
      //setCredits(credits);
      setPosts(postsFromApi);
      setLoading(false);
    }
    fetchposts();
  }, [slashRDate]);

  let index = myPosts.findIndex((post) => {
    return post.slug === slug;
  });

  if (index === -1) {
    index = 0;
  }

  const nextPost = myPosts[(index + 1) % myPosts.length];
  const prevPost = myPosts[(index - 1 + myPosts.length) % myPosts.length];

  console.log("peliculas datalooped", peliculasDataLooped);

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <section
          className="main-movie-banner"
          style={{
            backgroundImage: `url(${IMG_PATH + peliculasDataLooped.poster})`,
          }}
        >
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
              content={`https://mcseguros.com.mx/cineclub/posters/${peliculasDataLooped.original_title}.jpg`}
            />
            <title>{`Película: ${peliculasDataLooped.original_title} | Cineclub Forever`}</title>
            <link rel="canonical" href="https://cineclub-forever.web.app/" />
          </Helmet>
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
                  </div>
                  <p>{peliculasDataLooped.sinopsis}</p>
                  <p>
                    <b>Fecha de Lanzamiento:</b> {rDate}
                  </p>
                  <p>
                    <b>Genero: </b>
                    {peliculasDataLooped.generos.map((genero) => {
                      return genero.name + ", ";
                    })}
                  </p>
                </div>
              </Row>
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
                <a href={`/peliculas-detalle/${prevPost.slug}`}>
                  <GrPrevious /> Anterior
                </a>
              </div>
              <div>
                <a href={`/peliculas-detalle/${nextPost.slug}`}>
                  Siguiente <GrNext />
                </a>
              </div>
            </Container>
          </div>
        </section>
      )}
    </>
  );
}

export default PeliculaDetalle;