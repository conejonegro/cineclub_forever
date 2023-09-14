import { useEffect, useState } from "react";
import peliculasData from "../json/peliculasData";


const Video = ({url, subtitles}) => {
  const [subtitlesState, setSubtitles] = useState([]);

  useEffect(() => {
    // Función para cargar los subtítulos desde una fuente externa.
     function loadSubtitles() {
 
      // const newSubtitles = subtitles;
      setSubtitles(subtitles);

    }

    // Llama a la función para cargar los subtítulos una vez que el componente se monta.
    loadSubtitles();
    
  }, []); 
 
  console.log(subtitlesState);
    return (
      <>
        <video controls>
          <source src={url} type="video/mp4" preload="auto" controls="controls" width="300" height="150" data-setup="{}"  />
          <track 
          label="Subtitulos" 
          kind="subtitles"  
          src={subtitlesState}  
          srcLang="es"  
          default/>
          Sorry, your browser doesn't support videos.
        </video>
        <img src=".."/>
       
      </>
    );
  };
  
export default Video;