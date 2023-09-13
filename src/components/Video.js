import peliculasData from "../json/peliculasData";


const Video = ({url}) => {
  console.log(peliculasData);
    return (
      <>
        <video controls width="100%">
          <source src={url} type="video/mp4" preload="auto" controls="controls" width="300" height="150" data-setup="{}"  />
          <track src="https://streaming.trlvdsgn.website/wp-content/uploads/2023/08/dressed-to-kill-subs.vtt" kind="subtitle" srcLang="es" label="Spanish" default={true}/>
          Sorry, your browser doesn't support videos.
        </video>
       
      </>
    );
  };
  
export default Video;