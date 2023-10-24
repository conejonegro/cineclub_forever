import { collection, getDocs } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import FirebaseSettings from "../components/FirebaseSettings";
import { useEffect, useState, createContext } from "react";


const db = getFirestore(FirebaseSettings);

export const dataFromFirebaseContext = createContext();
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
  
        //  console.log(data); // Esto imprimirá el arreglo en la consola.
        setDataFromFirebase(data); // Actualizamos el estado con los datos obtenidos de Firebase.
      }
  
      fetchDataFromFirebase();

    }, []);

    // console.log(dataFromFirebase)
    
    return(
        <dataFromFirebaseContext.Provider value={dataFromFirebase}>
          <div>
           <h1></h1>
          </div>
        </dataFromFirebaseContext.Provider>
     
    )
}


export {ShowData};