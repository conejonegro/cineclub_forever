import axios from "axios";
import { useState, useContext } from "react";
import {searchContext} from "./SearchProvider";


const API_KEY = 'd35b24b361166e540ee6c082ddecd6bf';

function Search() {

   const { searchData, searchOnAPI, inputData, getData, dataFromSearch } = useContext(searchContext);


    return ( 
       
        <form className="d-flex search-bar-form" role="search" type='submit' onSubmit={searchOnAPI}>
             {/* {dataFromSearch ? <Navigate to='/search' /> : ''} */}
            <input className="form-control me-2" onChange={inputData} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit"  >Search</button>
            {/* <SearchPage dataFromSearch={dataFromSearch}/> */}
      </form>
     );
}

export default Search;