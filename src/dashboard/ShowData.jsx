import { collection, getDocs, query } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import FirebaseSettings from "../components/FirebaseSettings";
import { useEffect, useState } from "react";
import { TmdbApiCall } from "../components/TmdbAPICall";


const db = getFirestore(FirebaseSettings);

function ShowData(){

    const [dataFromFirebase, setDataFromFirebase] = useState([]); // Usamos useState para gestionar el estado del arreglo.

    useEffect(() => {

      async function fetchDataFromFirebase() {
        const data = [];
        const querySnapshot = await getDocs(collection(db, 'peliculas'));
        querySnapshot.forEach(doc => {
          const daTaEach = doc.data();
          if (daTaEach) {
            data.push(daTaEach);
          }
        });
  
        console.log(data); // Esto imprimirá el arreglo en la consola.
        setDataFromFirebase(data); // Actualizamos el estado con los datos obtenidos de Firebase.
      }
  
      fetchDataFromFirebase();

    }, []);

    console.log(dataFromFirebase); 
    
    return(
       <>
       <ul>
        {dataFromFirebase.map((item, index) => (
          <li key={index}>{item.tmdb_id}</li> 
        ))}
      </ul>
      
      
       </>
     
    )
}


export default ShowData;