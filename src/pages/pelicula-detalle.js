import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import "../css/pelicula-detalle.css";
import peliculasData from "../json/peliculasData";
import Video from "../components/Video";
import { useState,useEffect } from "react";
import axios from "axios";
import { collection, getDocs } from "firebase/firestore"; 
import FirebaseSettings from "../components/FirebaseSettings";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(FirebaseSettings);
const API_KEY = 'd35b24b361166e540ee6c082ddecd6bf';
const IMG_PATH = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'

function PeliculaDetalle({}){

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [rDate, setRDate] = useState();
const [dataFromFirebase, setDataFromFirebase] = useState([]);
const userDataString = localStorage.getItem('userData');
const userData = JSON.parse(userDataString);
const [arrayFromFirebase, setArrayFromFirebase] = useState([]);

// API CALL
useEffect(() => {
  async function fetchDataFromFirebase() {

    const data = [];
    const querySnapshot = await getDocs(collection(db, 'peliculas'));
    querySnapshot.forEach((doc) => {
      const daTaEach = doc.data();
      if (daTaEach) {
        data.push(daTaEach);
      }
    });

    setDataFromFirebase(data);

    const arrayData = data.map((elem) => (
      { id: elem.id }
      ));

    setArrayFromFirebase(arrayData);

    try {
      if (arrayData.length > 0) { // Verifica si arrayData tiene datos
        
        const responses = await Promise.all(
          arrayData.map((movie) =>
            axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=es-MX`)
          )
        );

        const postData = responses.map((response) => response.data);
        setPosts(postData);
        setLoading(false);
      } else {
        setLoading(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  }

  fetchDataFromFirebase();
}, []);



    console.log(posts)

   console.log('arreglo desde firebase', arrayFromFirebase)

  let myPosts = posts.map((post) => {
    post.title.toLowerCase();
    return(
        {original_title: post.title, slug: post.title.toLowerCase().replace(/\s+/g, '-'), id: post.id, poster: post.poster_path, sinopsis: post.overview, release_date: post.release_date, generos: post.genres, calificacion: post.vote_average}
    )});

    console.log('my posts', myPosts)

  const { slug } = useParams();
  const peliculasDataLooped = myPosts.find((post) => (post.slug === slug));

  // console.log(myPosts)

  useEffect(() => {
    if (peliculasDataLooped && peliculasDataLooped.release_date) {
      const releaseDate = peliculasDataLooped.release_date;
      const slashRDate = releaseDate.replace(/-/g, "/");
      setRDate(slashRDate);
    }
  }, [peliculasDataLooped]);

   console.log(peliculasDataLooped)

// Desarrollo comentarios
  let value = "";

  function textAreaValue(e){
     value = e.target.value
    //  console.log(value) 
  }

  function postComment(){
    // console.log(value)
    localStorage.setItem('comment', value)
   
  }

  const commentFromLocal = localStorage.getItem("comment");
  // console.log(commentFromLocal)

  if (!dataFromFirebase) {
    return <div>Cargando datos de Firebase...</div>;
  }
 
    return (
          <>
          {loading ? 'loading' : 
            <section className="main-movie-banner" style={{backgroundImage: `url(${IMG_PATH+peliculasDataLooped.poster})`}}>
              <div className="banner-support">
                  <Container className="container">
                      <Row>
                          <div className="col-lg-4 poster">
                              <img src={IMG_PATH+peliculasDataLooped.poster} alt="Poster descriptivo" />
                          </div>
                          <div className="col-lg-8 movie-info">
                              <div className="titulo-pelicula">
                                <div>
                                    <h1>{peliculasDataLooped.original_title}</h1><span>({peliculasDataLooped.generos[0].name})</span>
                                  </div>
                                  <p>Calificacion: {peliculasDataLooped.calificacion}</p>
                                  {/* <p>{peliculasDataLooped.genero}</p> */}
                              </div>
                              <p>{peliculasDataLooped.sinopsis}</p> 
                              
                              <p><b>Fecha de Lanzamientos:</b> {rDate}</p>
                              <p><b>Genero:</b> {peliculasDataLooped.generos.map(genero => {
                                return genero.name + ", "
                              })}</p>
                          </div>
                      </Row>   
                  </Container>
              </div>
              {
                userData ? 
                <>
                  <Video url={peliculasDataLooped.video_url} subtitles={peliculasDataLooped.subtitles} />
                {/* Desarrollo comentarios */}
                  {commentFromLocal ?  <p className="comment-from-local">{commentFromLocal}</p> : ""}
                  <div className="comment-box">
                    <textarea  rows="3" cols="30" placeholder="Escribe tu comentario" onChange={textAreaValue}></textarea>
                    <button className="btn btn-primary btn-lg " onClick={postComment}>Enviar</button>
                  </div>
                </>
                : 
                  <h5 className="inicia-sesion">Inicia Sesion para ver el Video...</h5>
              }


            </section>
          }
        </>    
    )            
  
}

export default PeliculaDetalle;