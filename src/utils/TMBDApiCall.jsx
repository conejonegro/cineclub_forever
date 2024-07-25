import axios from "axios";
export default function TMDBApiCall() {

   const movies_id = [{ id: 23655  }, { id: 42148 },{ id: 772071 },{ id: 660942 },{ id: 9426 },{ id: 780609  }, { id: 882598}, {id: 7452}, {id: 26422}];
   const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

      const fetchData = async () => {
        try {
          const responses = await Promise.all(
            movies_id.map((movie) =>
              axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&language=es-MX`)
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