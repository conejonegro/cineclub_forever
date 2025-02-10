import Container from "react-bootstrap/esm/Container";
import '../css/contacto.css';
import { Helmet } from 'react-helmet';
function Contacto(){
    return(
        <Container>
            <Helmet>
                <title>{"Contacto | Cineclub Forever"}</title>
                <meta name="description" content={"Get in touch with Cineclub Forever! Reach out for information on upcoming screenings, membership, or any questions. We're here to connect film lovers in Guadalajara!"} />
            </Helmet>

            <div className="contactanos-title-cont">   
                <h1>Contactanos:</h1>
                <p><b>Streaming de peliculas – Guadalajara Jalisco</b><br/>Tienes alguna pregunta relacionada con el sitio?<br/>Contactanos por este medio y nos pondremos en contacto.</p>
            </div>
           <form onSubmit={(e)=>{
            e.preventDefault();
           // console.log(e.target.nombre.value);
           }}>  
                <div className="input">
                    <label>Nombre</label>
                    <input name='nombre' placeholder="Escribe tu nombre" />
                </div>
                <div className="input">
                    <label>Correo</label>
                    <input name='correo' placeholder="Escribe tu correo" />
                </div>
                <div className="input">
                    <label>Mensaje</label>
                    <textarea rows={6} name='mensaje' placeholder="Escribe tu Mensaje" />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </Container>
    )
}

export default Contacto;