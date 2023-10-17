import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import "../css/pelicula-detalle.css";
import peliculasData from "../json/peliculasData";
import Video from "../components/Video";
import { useState,useEffect } from "react";
import axios from "axios";

const API_KEY = 'd35b24b361166e540ee6c082ddecd6bf';
const IMG_PATH = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'
const movies_id = [{ id: 460885  }, { id: 17111 },{ id: 772071 },{ id: 660942 },{ id: 9426 },{ id: 780609  }, { id: 882598}, {id: 7452}, {id: 26422}];

function PeliculaDetalle({}){

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [rDate, setRDate] = useState();
const userDataString = localStorage.getItem('userData');
const userData = JSON.parse(userDataString);

// API CALL
  useEffect(() => {

    const fetchData = async () => {

      try {
        const responses = await Promise.all(

          movies_id.map((movie) =>
            axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`)

          )
        );
        
        const postData = responses.map((response) => (
          response.data
          ));

        setPosts(postData);
        setLoading(false)
       
      } catch (error) {
        console.error('Error fetching data:', error);
       
      }
    };

    fetchData();
  }, []);

  let myPosts = posts.map((post) => {
    post.title.toLowerCase();
    return(
        {original_title: post.original_title, slug: post.title.toLowerCase().replace(/\s+/g, '-'), id: post.id, poster: post.poster_path, sinopsis: post.overview, release_date: post.release_date}
    )});

  const { slug } = useParams();
  const peliculasDataLooped = myPosts.find((post) => (post.slug === slug));

  console.log(myPosts)

  useEffect(() => {
    if (peliculasDataLooped && peliculasDataLooped.release_date) {
      const releaseDate = peliculasDataLooped.release_date;
      const slashRDate = releaseDate.replace(/-/g, "/");
      setRDate(slashRDate);
    }
  }, [peliculasDataLooped]);

  console.log(peliculasDataLooped)

  if(userData){
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
                                  <h1>{peliculasDataLooped.original_title}</h1><span>({rDate})</span>
                                  {/* <p>{peliculasDataLooped.genero}</p> */}
                              </div>
                              <p>{peliculasDataLooped.sinopsis}</p> 
                              
                              <p><b>Fecha de Lanzamientos:</b> {rDate}</p>
                          </div>
                      </Row>   
                  </Container>
              </div>
              <Video url={peliculasDataLooped.video_url} subtitles={peliculasDataLooped.subtitles} />
            </section>
          }
          
        </>    
    )            
  }
  else{

  }

    return(
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
                                <h1>{peliculasDataLooped.original_title}</h1><span>({rDate})</span>
                                {/* <p>{peliculasDataLooped.genero}</p> */}
                            </div>
                            <p>{peliculasDataLooped.sinopsis}</p> 
                            
                            <p><b>Fecha de Lanzamiento:</b> {rDate}</p>
                        </div>
                    </Row>   
                </Container>
            </div>
            <h5 className="inicia-sesion">Inicia Sesion para ver el Video...</h5>
          </section>
        }
        
      </>                   
    )

   
}

export default PeliculaDetalle;