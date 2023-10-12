import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const API_KEY = 'd35b24b361166e540ee6c082ddecd6bf';
const movies_id = [{ 
                      id: 550
                    }, 
                    { 
                      id: 552
                    },
                    { 
                      id: 788734
                    },
                    { 
                      id: 660942
                    },
                    { 
                      id: 9426
                    },
                    { 
                      id: 780609
                    }
                  ];
const IMG_PATH = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'

//  const nameQuery = "donnie+darko";
// const baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
//  const baseURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`;
//  const baseURL = `https://api.themoviedb.org/3/movie/346698/keywords?api_key=${API_KEY}`;
// const baseURL = `https://api.themoviedb.org/3/search/movie?query=${nameQuery}&api_key=${API_KEY}`;

function TmdbApiCall() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h5 className='container'>Cargando...</h5>;
  }
  console.log(posts)
  return (
   
    <div id="peliculasCont" className='container'>
        <h1>Todas las peliculas</h1>
        <Row className="justify-content-between ">
          <div className="main-container-pelicula col-md-6 col-xl-4 col-xxl-3" >


      {posts.map((post) => (
        <div key={post.id} className='movie-container'>
          
          <Link to={"/peliculas-detalle/"+post.original_title}>
           
            <img src={IMG_PATH+post.poster_path} alt={post.original_title} className="poster "/>
            <h2>{post.original_title}</h2>
            <p>{post.overview.substring(0, 80)+'...'}</p>
          </Link>
         
        </div>
      ))}
      </div>
      </Row>
    </div>
  );
}

export default TmdbApiCall;
