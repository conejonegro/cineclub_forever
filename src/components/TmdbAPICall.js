import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import PeliculaDetalle from '../pages/pelicula-detalle';
import {dataFromFirebaseContext, ShowData} from '../dashboard/ShowData';
import FirebaseSettings from "../components/FirebaseSettings";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(FirebaseSettings);
const API_KEY = 'd35b24b361166e540ee6c082ddecd6bf';
const IMG_PATH = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'
// const movies_id = [{ id: 460885  }, { id: 17111 },{ id: 772071 },{ id: 660942 },{ id: 9426 },{ id: 780609  }, { id: 882598}, {id: 7452}];

//  const nameQuery = "donnie+darko";
// const baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
//  const baseURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`;
//  const baseURL = `https://api.themoviedb.org/3/movie/346698/keywords?api_key=${API_KEY}`;
// const baseURL = `https://api.themoviedb.org/3/search/movie?query=${nameQuery}&api_key=${API_KEY}`;


function TmdbApiCall() {
 
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname;
  const [dataFromFirebase, setDataFromFirebase] = useState([]); // Usamos useState para gestionar el estado del arreglo.

    useEffect(() => {

      async function fetchDataFromFirebase() {
        

        const data = [];
        
        const querySnapshot = await getDocs(collection(db, 'peliculas'));
        
        querySnapshot.forEach(doc => {
          const daTaEach = doc.data();
          if (daTaEach) {
            data.push(daTaEach);
          }
        });
  
        //  console.log(data); // Esto imprimirá el arreglo en la consola.
        setDataFromFirebase(data); // Actualizamos el estado con los datos obtenidos de Firebase.
        // console.log(data)
       
      }
  
      

      const fetchData = async () => {

       await fetchDataFromFirebase();
      
        try {
          const responses = await Promise.all(
  
            arrayFromFirebase.map((movie) =>
              axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=es-MX`)
  
            )
          );
          //  console.log(responses)
          
          const postData = responses.map((response) => (
            response.data
            ));
  
          setPosts(postData);
          setLoading(false);
          //  console.log(postData);
          //  console.log(posts);
          
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();

      

    }, [loading]);

    const arrayFromFirebase = dataFromFirebase.map(id => {
     
      return ({id: id.id}) 
    })

      // console.log(arrayFromFirebase)

    
      // console.log(movies_id)


  if (loading) {
    return <h5 className='container'>Cargando...</h5>;
  }
  //  console.log(posts)


  let myPosts = posts.map((post) => {
    post.title.toLowerCase();
    return(
      {title: post.title, slug: post.title.toLowerCase().replace(/\s+/g, '-'), id: post.id, poster: post.poster_path, sinopsis: post.overview, release_date: post.release_date}
    )});

  
  const peliculasDataArraySliced = myPosts.slice(0, 4);
  // console.log(peliculasDataArraySliced)
// Llamada a la API de Firebase

if (!dataFromFirebase) {
  return <div>Cargando datos de Firebase...</div>;
}


  if (isHomePage === '/') {
    return(
      <div id="peliculasCont" className='container my-4'>
      
        <h1 className='my-4'>Ultimas peliculas...</h1>
        <Row className="justify-content-center todas-peliculas-imdb">
          
              {peliculasDataArraySliced.map((post) => (
               
                  <div className='movie-container' key={post.id}>
                    <Link to={"/peliculas-detalle/"+post.slug}>
                      <img src={IMG_PATH+post.poster} alt={post.nombre} className="poster " />
                    
                      <h2>{post.title}</h2>
                      <p>{post.sinopsis.substring(0, 80)+'...'}</p>
                    </Link>
                </div>
               
                
              ))}

        </Row>
        
      </div>
    )
  }
  else{
    return (
      <div id="peliculasCont" className='container my-4'>
        <h1 className='my-4'>Todas peliculas.</h1>
        <Row className="justify-content-center todas-peliculas-imdb">
          
              {myPosts.map((post) => {
                return(
                  <div className='movie-container' key={post.id}>
                    <Link to={"/peliculas-detalle/"+post.slug}>
                      <img src={IMG_PATH+post.poster} alt={post.nombre} className="poster " />
                    
                      <h2>{post.title}</h2>
                      <p>{post.sinopsis.substring(0, 80)+'...'}</p>
                    </Link>
                </div>
                )
                
              })}

        </Row>
      </div>
    );
  }

}

export { TmdbApiCall };

