import axios from "axios";


export default function getCredits(movie_id) {

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=es-MX`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return fetchData();
  
}
