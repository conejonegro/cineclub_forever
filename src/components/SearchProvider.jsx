import { createContext, useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router";



export const searchContext = createContext();

const API_KEY = 'd35b24b361166e540ee6c082ddecd6bf';

const SearchProvider = ({ children }) => {
  
    const [searchData, setSearchData] = useState('hola contexto');
    // const navigate = useNavigate();


    //
    const [dataFromSearch, setDataFromSearch] = useState();

    let userSearch;

    async function getData(){

        try{

            // const response = await axios.get(`https://api.themoviedb.org/3/movie/${2}?api_key=${API_KEY}&language=es-MX`)
            const responseTwo = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${userSearch}&api_key=${API_KEY}&language=es-MX`)
            // console.log(responseTwo.data)
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
        // navigate('/search');
       
    }
    //
  
    return (
      <searchContext.Provider value={{ searchData, getData, inputData, searchOnAPI, dataFromSearch }}>
        {children}
      </searchContext.Provider>
    );
  };

export  default SearchProvider;