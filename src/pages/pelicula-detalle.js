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
const movies_id = [{ id: 550  }, { id: 552 },{ id: 788734 },{ id: 660942 },{ id: 9426 },{ id: 780609  }];

function PeliculaDetalle({}){
// API CALL

const [posts, setPosts] = useState([]);

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
        [{original_title: post.original_title, slug: post.title.toLowerCase().replace(/\s+/g, '-'), id: post.id, poster: post.poster_path, sinopsis: post.overview, release_date: post.release_date}]
    )});

    console.log(myPosts)


     const { slug } = useParams();
     const peliculasDataLooped = posts.find((post) => (post.slug === slug));
    //  console.log(peliculasDataLooped);
    //   console.log(myPosts);
    
    return(
        <h1>hola</h1>
        // <section className="main-movie-banner" style={{backgroundImage: `url(${peliculasDataLooped.poster})`}}>
        //     <div className="banner-support">
        //         <Container className="container">
        //             <Row>
        //                 <div className="col-lg-4 poster">
        //                     <img src={peliculasDataLooped.poster} alt="Poster descriptivo" />
        //                 </div>
        //                 <div className="col-lg-8 movie-info">
        //                     <div className="titulo-pelicula">
        //                         <h1>{peliculasDataLooped.title}</h1><span>({peliculasDataLooped.release_date})</span>
        //                         {/* <p>{peliculasDataLooped.genero}</p> */}
        //                     </div>
        //                     <p>{peliculasDataLooped.sinopsis}</p> 
        //                     {/* <p>{peliculasDataLooped.director}</p> */}
        //                     <p><b>Fecha de Lanzamiento</b> {peliculasDataLooped.release_date}</p>
        //                 </div>
        //             </Row>   
        //         </Container>
        //     </div>
        //     {/* <Video url={peliculasDataLooped.video_url} subtitles={peliculasDataLooped.subtitles} /> */}
        // </section>
    )
   
}


export default PeliculaDetalle;