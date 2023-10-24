// import { getDatabase, ref, set } from "firebase/database";
import FirebaseSettings from "../components/FirebaseSettings";
import { useState } from "react";
import "../css/dashboard.css";
import ShowData from "./ShowData";
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";


// Initialize Realtime Database and get a reference to the service


const db = getFirestore(FirebaseSettings);
 

function Dashboard(){

    const [idValue, setIdValue] = useState([]);
    const [subtitulosValue, setSubtitulosValue] = useState([]);
    const [videoValue, setVideoValue] = useState([]);
    const [successMessage, setsuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

     //Functions to Capture value
     function captureIDValue(e){
        console.log(e.target.value);
        setIdValue(e.target.value);
    
    }
    function captureValueSubtitulos(e){
        console.log(e.target.value);
         setSubtitulosValue(e.target.value);
        
    } 
    function captureValueVideo(e){
        setVideoValue(e.target.value);
        
    }

   async function postOnDatabase(subtitulosValue, setVideoValue, idValue ){

    if(subtitulosValue == "" || setVideoValue == "" || idValue == ""){
        setErrorMessage("Llena todos los campos")
        
    }else{

        try {
            const docRef = await addDoc(collection(db, "peliculas"), {
              subtitle_url: subtitulosValue,
              video_url: setVideoValue,
              tmdb_id: idValue
            });
            console.log("Document written correctly with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        }

    }

    // function writeNewMovie(movieId, nombre, poster, release_date, sinopsis, slug, subtitles, video_url) {
    //     if(idValue == "" || nombreValue == "" || posterValue == "" || fechaValue == "" || sinopsisValue == "" || slugValue == "" || subtitulosValue == "" || videoValue === ""){
    //         setErrorMessage("Error: nose pude agregar la pelicula, Llena todos los campos");
    //         console.log(idValue);
    //     }else{
    //         const database = getDatabase();
    //             set(ref(database, '/' + nombre), {
    //             id: movieId,
    //             nombre: nombre,
    //             poster : poster,
    //             release_date: release_date,
    //             sinopsis: sinopsis,
    //             slug: slug,
    //             subtitles: subtitles,
    //             video_url: video_url,
    //             });
    //             setsuccessMessage("Pelicula Agregada con Exito");  
    //     }
        
    //   }

    
        

    return(
        <section className="dashboard">
           
            <div className="container  my-4">
                <h1><b>Dashboard</b></h1>
                <h3>Agregar una nueva pelicula:</h3>

                <form id="dashboardForm">

                    <div className="form-outline mb-4">

                        <label>The movie Datbase, movie ID: </label>

                        <input type="text" value={idValue} onChange={captureIDValue} className="form-control form-control-lg"/>
                    </div>
                    
                    <div className="form-outline mb-4">
                        <label>URL Subtitulos: </label>
                        <input type="text" value={subtitulosValue} onChange={captureValueSubtitulos} className="form-control form-control-lg"/>
                    </div>
                    <div className="form-outline mb-4">
                        <label>Video URL: </label>
                        <input type="text" value={videoValue} onChange={captureValueVideo} className="form-control form-control-lg"/>
                    </div>

                </form>

                <button type="button" onClick={() => postOnDatabase(subtitulosValue, videoValue, idValue)} className="btn btn-primary btn-lg">Load Data</button>
                {successMessage ? <p className="alert alert-success">{successMessage}</p> : ""}
                {errorMessage ? <p className="alert alert-danger">{errorMessage}</p> : ""}

            </div>
        </section>
    )
}

export default Dashboard;