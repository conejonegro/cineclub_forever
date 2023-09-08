import peliculasData from "../json/peliculasData";

const Video = () => {
  console.log(peliculasData);
    return (
      <video controls width="100%">
        {peliculasData.map((pelicula) => {
         
            <div key={pelicula.id}>
              <source src={pelicula.video_url} type="video/mp4"  />
              Sorry, your browser doesn't support videos.
            </div>
        
        })};
        
      </video>
    );
  };
  
  export default Video;