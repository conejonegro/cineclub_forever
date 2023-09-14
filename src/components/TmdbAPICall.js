import axios from 'axios';
import React from 'react';
import peliculasData from '../json/peliculasData'


const API_KEY = 'd35b24b361166e540ee6c082ddecd6bf';

const peliculaNombre = peliculasData.map( (pelicula) => (
   pelicula.nombre
   

));
console.log(peliculaNombre)
 const nameQuery = "donnie+darko";
// const baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
//  const baseURL = `https://api.themoviedb.org/3/movie/346698?api_key=${API_KEY}`;
//  const baseURL = `https://api.themoviedb.org/3/movie/346698/keywords?api_key=${API_KEY}`;
const baseURL = `https://api.themoviedb.org/3/search/movie?query=${nameQuery}&api_key=${API_KEY}`;


function TmdbApiCall(){

    const [post, setPost] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        console.log("entra use efect")
        
        peliculaNombre.map( (pelicula) => {

          console.log(pelicula)
         
          
        } )

        axios.get(baseURL).then((response) => {
          setPost(response.data);
          setLoading(false);
          
        });
      }, []);
        
      
      if (loading) {
        return <p>Cargando...</p>;
      }else{
      
        const datos = Object.values(post);
          console.log(datos)
        return (
            <h1>ddd</h1>
         );   
      }

     
     
}

export default TmdbApiCall;