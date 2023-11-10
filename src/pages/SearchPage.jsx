import { useState, useContext, useEffect } from "react";
import {searchContext} from "../components/SearchProvider";

function SearchPage() {

    const { dataFromSearch } = useContext(searchContext);


    return ( 
        <>
            {dataFromSearch ? 
                (<div>
                
                    <h1 className="container my-4 ">{

                        

                    }</h1>

                </div>) :
                <div className="container my-4">Haz tu Busqueda</div>
            }
        </>
       
     );
}

export default SearchPage;