import { useState, useContext, useEffect } from "react";
import {searchContext} from "../components/SearchProvider";
import Search from "../components/Search";
import { Link } from "react-router-dom";

const IMG_PATH = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';

function SearchPage() {

    const { dataFromSearch } = useContext(searchContext);
    const [ resultsArray, setResultsArray ] = useState([]);

    
    

    useEffect(() => {
        if (dataFromSearch){
            const resultsFromData = dataFromSearch.results;
            setResultsArray(resultsFromData)
            // console.log(resultsFromData);
        }
    }, [dataFromSearch])

    console.log('mis results',resultsArray)

    let myPosts = resultsArray.map((post) => {
      return  (
        {title: post.title, slug: post.title.toLowerCase().replace(/\s+/g, '-'), id: post.id, poster: post.poster_path, sinopsis: post.overview, release_date: post.release_date}
      )
    });

    console.log(myPosts)


    return ( 
       
        <>
            {dataFromSearch ? 
                <div className="container">
                    <Search/>
                    <div className="row">
                        <div className="main-container-pelicula col-md-6 col-xl-4 col-xxl-3" >
                        
                        {myPosts.map(e => (
                            <div className='movie-container' key={e.id}>
                                {/* <Link to={"/peliculas-detalle/"+e.slug}> */}
                                <img src={IMG_PATH+e.poster} alt={e.title} className="poster " />
                                
                                <h2>{e.title}</h2>
                                <p>{e.sinopsis.substring(0, 80)+'...'}</p>
                                {/* </Link> */}
                            </div>
                        ))}
                        </div>
                    </div>

                    

                </div> :
                <div className="container my-4">Haz tu Busqueda
                    
                    <Search/>
                    
                </div>
            }
        </>
       
     );
}

export default SearchPage;