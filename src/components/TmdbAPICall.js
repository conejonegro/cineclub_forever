import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import peliculasData from '../json/peliculasData';


const API_KEY = 'd35b24b361166e540ee6c082ddecd6bf';
const movie_id = 552;
const movie_ids = [550, 552];

const peliculaNombre = peliculasData.map( (pelicula) => (
   pelicula.nombre
   

));
// console.log(peliculaNombre)
 const nameQuery = "donnie+darko";
// const baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
 const baseURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`;
//  const baseURL = `https://api.themoviedb.org/3/movie/346698/keywords?api_key=${API_KEY}`;
// const baseURL = `https://api.themoviedb.org/3/search/movie?query=${nameQuery}&api_key=${API_KEY}`;


function TmdbApiCall(){

    const [post, setPost] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    

    React.useEffect(() => {
        // console.log("entra use efect")
        
        const movies_from_api = movie_ids.map( (movie_id) => {

          axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`).then((response) => {
            setPost(response.data);
            setLoading(false);
            // console.log(response.data)
            
          });

        } )
 
      }, []);
        
      if (loading) {
        return <p>Cargando...</p>;
      }else{
      
        // const datos = Object.values(post);
           console.log(post)
        return (
          <Container className='my-4'>
            <h1>{post.original_title}</h1>
          </Container>
         );   
      }
     
}

export default TmdbApiCall;