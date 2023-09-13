import axios from 'axios';
import React from 'react';


const API_KEY = 'd35b24b361166e540ee6c082ddecd6bf';
const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

function TmdbApiCall(){

    const [post, setPost] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        console.log("entra use efect")
        axios.get(baseURL).then((response) => {
          setPost(response.data);
          setLoading(false);
          
        });
      }, []);
    //   const datos = Object.values(post);
    //   console.log(datos)
      
      if (loading) {
        return <p>Cargando...</p>;
      }else{
      
        const datos = Object.values(post);
        console.log(datos[0])
        return (
            <h1>{datos[1][0].title}</h1>
         );   
      }

     
     
}

export default TmdbApiCall;