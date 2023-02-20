import { useEffect } from 'react';


function AppiCall() {
    useEffect(() => {
      const apiUrl = 'https://cineclub-forever-default-rtdb.firebaseio.com/peliculas.json';
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <div>
        {/* <h1>Haciendo una petición a una API REST en React.js</h1> */}
      </div>
    );
  }
  
  export default AppiCall;