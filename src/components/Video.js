const Video = () => {
    return (
      <video controls width="100%">
        <source src="/video-example.webm" type="video/webm" />
        <source src="/video-example.mp4" type="video/mp4"
        />
        Sorry, your browser doesn't support videos.
      </video>
    );
  };
  
  export default Video;