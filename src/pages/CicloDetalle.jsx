import { Container } from "react-bootstrap";
import { CiclosJSON } from "../utils/ciclos/Ciclos";
import { useParams } from "react-router-dom";
import TMDBApiCall from "../utils/TMBDApiCall";




export const CicloDetalle = () =>{

   const ciclosArray = CiclosJSON();
   const slug = useParams().slug;
   const ciclosData = TMDBApiCall(ciclosArray);

   console.log("ciclos data",ciclosData)


   const cicloFound = ciclosArray.find( ciclo => ciclo.nombre.toLowerCase() === slug );
   console.log("mis ciclos array", ciclosArray)
   //console.log("ciclofound", cicloFound);
   //console.log("slug",slug)

   return(
      <Container className="ciclos__main-container my-4">
            <div>
               <h1>{cicloFound.nombre}</h1>
               <div>
                  <img src="" alt="" />
                  <h5>{cicloFound.Peliculas.nombre}</h5>
               </div>
            </div>
      </Container>
   )
}