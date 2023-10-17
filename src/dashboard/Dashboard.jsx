import { getDatabase, ref, set } from "firebase/database";
import peliculasData from "../json/peliculasData";
import FirebaseSettings from "../components/FirebaseSettings";
import { useState } from "react";
import "../css/dashboard.css";
import ShowData from "./ShowData";


// Initialize Realtime Database and get a reference to the service

  const dataFake = {
                        "id": 3,
                        "slug": "No-One-Will-Save-You",
                        "nombre": "No One Will Save Youuuu",
                        "sinopsis": "Brynn es una joven brillante que vive apartada de un vecindario que la ha aislado. Solitaria pero optimista, encuentra consuelo en el hogar donde creció, hasta que unos extraños ruidos la despiertan en mitad de la noche.",
                        "poster": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/udniPSAJS6RDarNgSBK8IUsFthf.jpg",
                        "release_date": "22/9/2023",
                        "subtitles": "https://trlvdsgn.website/img/dressed-to-kill-sbus.vtt",
                        "video_url": "https://streaming.trlvdsgn.website//wp-content/uploads/2023/10/no-one.mp4"
                    };

                   

  
function Dashboard(){
    const [fakeData, setFakeData] = useState([]);
    const [idValue, setIdValue] = useState([]);
    const [nombreValue, setNombreValue] = useState([]);
    const [posterValue, setPosterValue] = useState([]);
    const [fechaValue, setFechaValue] = useState([]);
    const [sinopsisValue, setSinopsisValue] = useState([]);
    const [slugValue, setSlugValue] = useState([]);
    const [subtitulosValue, setSubtitulosValue] = useState([]);
    const [videoValue, setVideoValue] = useState([]);
    const [successMessage, setsuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function writeNewMovie(movieId, nombre, poster, release_date, sinopsis, slug, subtitles, video_url) {
        if(idValue == "" || nombreValue == "" || posterValue == "" || fechaValue == "" || sinopsisValue == "" || slugValue == "" || subtitulosValue == "" || videoValue == ""){
            setErrorMessage("Error: nose pude agregar la pelicula, Llena todos los campos");
            console.log(idValue);
        }else{
            const database = getDatabase();
                set(ref(database, '/' + nombre), {
                id: movieId,
                nombre: nombre,
                poster : poster,
                release_date: release_date,
                sinopsis: sinopsis,
                slug: slug,
                subtitles: subtitles,
                video_url: video_url,
                });
                setsuccessMessage("Pelicula Agregada con Exito");  
        }
        
      }

        //Functions to Capture value
        function captureValue(e){
            setIdValue(e.target.value);
        
        }
        function captureValueNombre(e){
            setNombreValue(e.target.value);
        
        } 
        function captureValuePoster(e){
            setPosterValue(e.target.value);
        
        } 
        function captureValueFecha(e){
            setFechaValue(e.target.value);
            
        } 
        function captureValueSinopsis(e){
            setSinopsisValue(e.target.value);
        
        } 
        function captureValueSlug(e){
            setSlugValue(e.target.value);
        
        } 
        function captureValueSubtitulos(e){
            setSubtitulosValue(e.target.value);
            
        } 
        function captureValueVideo(e){
            setVideoValue(e.target.value);
            
        } 
    

        function loadDummyData(){
            setFakeData(dataFake)
            writeNewMovie(idValue, nombreValue, posterValue, fechaValue, sinopsisValue, slugValue, subtitulosValue, videoValue);
        }

        

    return(
        <section className="dashboard">
            <ShowData/>
            <div className="container  my-4">
                <h1><b>Dashboard</b></h1>
                <h3>Agregar una nueva pelicula:</h3>

                <form id="dashboardForm">

                    <div className="form-outline mb-4">
                        <label>The movie Datbase, movie ID: </label>
                        <input type="text" value={idValue} onChange={captureValue} className="form-control form-control-lg"/>
                    </div>
                    <div className="form-outline mb-4">
                        <label>Nombre: </label>
                        <input type="text" value={nombreValue} onChange={captureValueNombre}  className="form-control form-control-lg"/>
                    </div>
                    <div className="form-outline mb-4">
                        <label>Poster URL: </label>
                        <input type="text" value={posterValue} onChange={captureValuePoster} className="form-control form-control-lg"/>
                    </div>
                    <div className="form-outline mb-4">
                        <label>Fecha de Estreno: </label>
                        <input type="text" value={fechaValue} onChange={captureValueFecha} className="form-control form-control-lg"/>
                    </div>
                    <div className="form-outline mb-4">
                        <label>Sinopsis: </label>
                        <input type="text" value={sinopsisValue} onChange={captureValueSinopsis} className="form-control form-control-lg"/>
                    </div>
                    <div className="form-outline mb-4">
                        <label>Slug: </label>
                        <input type="text" value={slugValue} onChange={captureValueSlug} className="form-control form-control-lg"/>
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

                <button type="button" onClick={loadDummyData} className="btn btn-primary btn-lg">Load Data</button>
                {successMessage ? <p className="alert alert-success">{successMessage}</p> : ""}
                {errorMessage ? <p className="alert alert-danger">{errorMessage}</p> : ""}

            </div>
        </section>
    )
}

export default Dashboard;