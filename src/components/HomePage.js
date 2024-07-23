import '../css/home-page.css';
import {Pelicula} from './Pelicula';

function HomePage({titulo, json}) {

  //console.log('contenido json dentro homepage para filtrar')

  return (
    <div className="home-page container">
        <h1>{titulo}</h1>
        <Pelicula json={json}/>
    </div>
  );
}

export default HomePage;
