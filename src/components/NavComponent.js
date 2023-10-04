import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

function NavComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <NavLink to="/" className="navbar-brand" id='nav_logo'>
          <img src="https://streaming.trlvdsgn.website/wp-content/uploads/2022/01/fav-sineclub.png" alt='Cineclub Logo'/>
          Cineclub Forever
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className='nav-ul'>
              {navItems.map((e) => (
                 <li>
                    <NavLink to={e.item_url} className="nav-link">{e.text}</NavLink>
               </li>
              ))}
            </ul>
            {/* <ul className='nav-ul nav-login'>
              {navItemsLogin.map((e) => (
                 <li>
                    <NavLink to={e.item_url} className="nav-link">{e.text}</NavLink>
               </li>
              ))}
            </ul> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const navItems = [];
navItems.push({
  text: 'Peliculas',
  item_url: '/peliculas'
});
navItems.push({
  text: 'Contacto',
  item_url: '/contacto'
});
navItems.push({
  text: 'API test',
  item_url: '/api-test'
});

const navItemsLogin = [];
navItemsLogin.push({
  text: 'Login',
  item_url: '/login'
});
navItemsLogin.push({
  text: 'Logout',
  item_url: '/logout'
});
navItemsLogin.push({
  text: 'Profile',
  item_url: '/profile'
});

export default NavComponent;
