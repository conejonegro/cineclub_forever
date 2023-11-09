import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";

const API_KEY = 'd35b24b361166e540ee6c082ddecd6bf';

function Search() {

    const [searchString, setSearchString] = useState('');
    const [dataFromSearch, setDataFromSearch] = useState()

    let userSearch = searchString;

    async function getData(){

        try{

            // const response = await axios.get(`https://api.themoviedb.org/3/movie/${2}?api_key=${API_KEY}&language=es-MX`)
            const responseTwo = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${userSearch}&api_key=${API_KEY}`)
            console.log(responseTwo.data)
            setDataFromSearch(responseTwo.data)
            
        }
        catch(error){
            console.log(error)
        }

    }

    function inputData(e){
        console.log(e.target.value);
         userSearch = e.target.value
         
        
    }
    function searchOnAPI(e){
        e.preventDefault();

        console.log('clickkk')
        getData();
        
    }

    function onClickButton(){
        setSearchString(userSearch)
        
    }


    // useEffect(() => {

    //     async function getData(){

    //         try{
    
    //             // const response = await axios.get(`https://api.themoviedb.org/3/movie/${2}?api_key=${API_KEY}&language=es-MX`)
    //             const responseTwo = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${userSearch}&api_key=${API_KEY}`)
    //             console.log(responseTwo.data)
                
    //         }
    //         catch(error){
    //             console.log(error)
    //         }
    
    //     }
    //     getData();
    // }, [])

    return ( 
       
        <form className="d-flex" role="search" type='submit' onSubmit={searchOnAPI}>
             {/* {dataFromSearch ? <Navigate to='/search' /> : ''} */}
            <input className="form-control me-2" onChange={inputData} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" onClick={onClickButton} >Search</button>
      </form>
     );
}

export default Search;