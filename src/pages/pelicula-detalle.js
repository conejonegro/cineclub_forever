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
const movies_id = [{ id: 550  }, { id: 552 },{ id: 788734 },{ id: 660942 },{ id: 9426 },{ id: 780609  }, { id: 882598}, {id: 7452}, {id: 26422}];

function PeliculaDetalle({}){
// API CALL

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [rDate, setRDate] = useState();

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

  console.log(posts)

  let myPosts = posts.map((post) => {
    post.title.toLowerCase();
    return(
        {original_title: post.original_title, slug: post.title.toLowerCase().replace(/\s+/g, '-'), id: post.id, poster: post.poster_path, sinopsis: post.overview, release_date: post.release_date}
    )});

    console.log(myPosts)


     const { slug } = useParams();
     const peliculasDataLooped = myPosts.find((post) => (post.slug === slug));
     console.log(peliculasDataLooped)
      // setRDate(peliculasDataLooped.release_date)
      // console.log(rDate)
    // const releaseDate = peliculasDataLooped.release_date;
    // // const slashRDate = releaseDate.replace("/-/g", "/");
    // console.log(releaseDate)

    
    

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
                                <h1>{peliculasDataLooped.original_title}</h1><span>({peliculasDataLooped.release_date})</span>
                                {/* <p>{peliculasDataLooped.genero}</p> */}
                            </div>
                            <p>{peliculasDataLooped.sinopsis}</p> 
                            
                            <p><b>Fecha de Lanzamiento</b> {peliculasDataLooped.release_date}</p>
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

export default PeliculaDetalle;