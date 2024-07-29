import axios from "axios";
import { Subtitles } from "./subtitles";
export default function TMDBApiCall() {

  const moviesData = Subtitles();
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

      const fetchData = async () => {
        try {
          const responses = await Promise.all(
            moviesData.map((movie) =>
              axios.get(`https://api.themoviedb.org/3/movie/${movie.tmdb_ID}?api_key=${API_KEY}&language=es-MX`)
            )
          );
          const postData = responses.map((response) => (
            response.data
            ));
            return postData;
        } catch (error) {
          console.error('Error fetching data:', error);
         
        }
      };
   return fetchData();
}