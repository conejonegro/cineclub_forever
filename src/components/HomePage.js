import '../css/home-page.css';
import {Pelicula} from './Pelicula';
function HomePage({titulo, json}) {
  return (
    <div className="home-page container">
        <h1>{titulo}ss</h1>
        <Pelicula json={json}/>
    </div>
  );
}

export default HomePage;
