import { useEffect } from "react";
//import {Teens} from "../utils/ciclos/CicloTeens";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export default function Ciclos(){

   
  // const cicloTeens = Teens()
   //console.log("ciclo teens", cicloTeens)

   async function datafetch(){
      try {
         const responses = await Promise.all(
          /*  cicloTeens.map((movie) => 
               fetch(`https://api.themoviedb.org/3/movie/${movie.TMDB_ID}?api_key=${API_KEY}&language=es-MX`)
           )*/
         )
         //console.log("responses", responses)
         const dataArray = await Promise.all(
            responses.map((response) => response.json())
         );
         //console.log("dataArray", dataArray)
         
         return dataArray

      } catch (error) {
         console.log("error", error)
      }
   }

   useEffect(() => {
      async function fetchData() {
         const data = await datafetch();
         console.log("my data array", data);
      }
      fetchData();
   }, []);




 //console.log("my data array", data)
   

return(
   <div className="container">
      <h1>Ciclos</h1>
   </div>
)
}