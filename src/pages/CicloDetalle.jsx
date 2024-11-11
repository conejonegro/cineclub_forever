import { Container } from "react-bootstrap";
import { CiclosJSON } from "../utils/ciclos/Ciclos";
import { useParams } from "react-router-dom";




export const CicloDetalle = () =>{

   const ciclosArray = CiclosJSON();
   const slug = useParams().slug;


   const cicloFound = ciclosArray.find( ciclo => ciclo.nombre.toLowerCase() === slug );
   console.log("mis ciclos array", ciclosArray)
   console.log("ciclofound", cicloFound);
   console.log("slug",slug)

   return(
      <Container className="my-4">
            <div key={cicloFound.nombre}>
               <h1>{cicloFound.nombre}</h1>
            </div>
      </Container>
   )
}