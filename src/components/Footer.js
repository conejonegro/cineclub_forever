import '../css/footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col md={3} className="footer-logo">
                        <img src="https://streaming.trlvdsgn.website/wp-content/uploads/2022/01/fav-sineclub.png" alt='Cineclub Logo'/>
                        <p>Streaming de Peliculas seleccionadas por CineClub Forever<sup>&reg;</sup> en Guadalajara Jalisco Mexico, sitio web creado por TRLVDSGN<sup>&trade;</sup></p>
                    </Col>
                    <Col md={3}>
                        <h2>Sitemap</h2>
                        <ul className='sitemap-list'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/videos/">Videos</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="friend-sites">
                        <h2>Friend Sites</h2>
                        <a href="#">TRLVDSGN</a>
                        <a href="#">Trlvdsgn Store</a>
                    </Col>
                    <Col md={3}>
                        <h2>Contactanos</h2>
                        <p>Tel:+52 33-2343-1091</p>
                        <p>Email: <a href="mailto:trlvdsgn@gmail.com">trlvdsgn@gmail.com</a></p>
                        <p>Direccion: Lerdo de Tejada 2407 B, Col Arcos Vallarta guadalajara Jalisco Mexico</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;