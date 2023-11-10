import axios from "axios";
import { useState, useContext } from "react";
import {searchContext} from "./SearchProvider";


const API_KEY = 'd35b24b361166e540ee6c082ddecd6bf';

function Search() {

   const { searchData, searchOnAPI, inputData, getData, dataFromSearch } = useContext(searchContext);

    console.log(searchData, dataFromSearch)
  
    // const [dataFromSearch, setDataFromSearch] = useState();

    // let userSearch;

    // async function getData(){

    //     try{

    //         // const response = await axios.get(`https://api.themoviedb.org/3/movie/${2}?api_key=${API_KEY}&language=es-MX`)
    //         const responseTwo = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${userSearch}&api_key=${API_KEY}`)
    //         console.log(responseTwo.data)
    //         setDataFromSearch(responseTwo.data)
            
            
    //     }
    //     catch(error){
    //         console.log(error)
    //     }

    // }

    // function inputData(e){
    //     console.log(e.target.value);
    //     userSearch = e.target.value
         
    // }

    // function searchOnAPI(e){
    //     e.preventDefault();

    //     console.log('clickkk')
    //     getData();
        
    // }

    // console.log(dataFromSearch)

    return ( 
       
        <form className="d-flex" role="search" type='submit' onSubmit={searchOnAPI}>
             {/* {dataFromSearch ? <Navigate to='/search' /> : ''} */}
            <input className="form-control me-2" onChange={inputData} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit"  >Search</button>
            {/* <SearchPage dataFromSearch={dataFromSearch}/> */}
      </form>
     );
}

export default Search;