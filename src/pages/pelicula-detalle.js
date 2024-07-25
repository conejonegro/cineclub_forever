import { Row, Container } from "react-bootstrap/";
import { useParams } from "react-router";
import "../css/pelicula-detalle.css";
import peliculasData from "../json/peliculasData";
import Video from "../components/Video";
import { useState, useEffect } from "react";
import TMDBApiCall from "../utils/TMBDApiCall";
import { Subtitles } from "../components/subtitles";

function PeliculaDetalle() {
  const IMG_PATH = process.env.REACT_APP_IMG_PATH;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rDate, setRDate] = useState();


  const userDataString = localStorage.getItem("userData");
  const userData = JSON.parse(userDataString);

  const subtitles = Subtitles();
  console.log("subtitulos my frind", subtitles)

  useEffect(() => {
    async function fetchposts() {
      const postsFromApi = await TMDBApiCall();
      setPosts(postsFromApi);
      setLoading(false);
      console.log("posts from state", posts);
    }
    fetchposts();
  }, []);

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

  const { slug } = useParams();
  const peliculasDataLooped = myPosts.find((post) => post.slug === slug);
  const sourceFound = subtitles.find((subtitle) => subtitle.name === slug);
  console.log("subtitle found", sourceFound)

  useEffect(() => {
    if (peliculasDataLooped && peliculasDataLooped.release_date) {
      const releaseDate = peliculasDataLooped.release_date;
      const slashRDate = releaseDate.replace(/-/g, "/");
      setRDate(slashRDate);
    }
  }, [peliculasDataLooped]);

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
            </Container>
          </div>
          {userData ? (
            <>
              <Video url={sourceFound?.videoSrc} subtitle={sourceFound?.subtitlePath} />
              {/* {commentFromLocal ?  <p className="comment-from-local">{commentFromLocal}</p> : ""} */}
              {/* <div className="comment-box">
                    <textarea  rows="3" cols="30" placeholder="Escribe tu comentario" onChange={textAreaValue}></textarea>
                    <button className="btn btn-primary btn-lg " onClick={postComment}>Enviar</button>
                  </div> */}
            </>
          ) : (
            <h5 className="inicia-sesion">
              Inicia Sesion para ver el Video...
            </h5>
          )}
        </section>
      )}
    </>
  );
}
export default PeliculaDetalle;
