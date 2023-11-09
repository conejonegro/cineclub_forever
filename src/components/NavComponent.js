import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from './UserProvider';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Search from './Search';

function NavComponent() {

  const [primerNombre, setPrimerNombre] = useState("");

 const userLocal =  localStorage.getItem('userData');
 const userData = JSON.parse(userLocal)
//  console.log(userData)

 
 
    useEffect(() => {
      
      
      if(userData){
       
        if(!userData.displayName){
          setPrimerNombre("Profile")
        }else{
          const primerEspacioIndex = userData.displayName.indexOf(' ');
          if (primerEspacioIndex !== -1) {
            setPrimerNombre(userData.displayName.substring(0, primerEspacioIndex));
            // console.log(primerNombre); // Esto imprimirá "Luis"
          } 
        }
        
      }

      
    }, [])
 

  

   const user = useContext(UserContext)
   
    // console.log(user)

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
            <ul className='nav-ul nav-login'>
    
            {(() => {
                  if(userData){
                    
                    return(
                      <>
                    
                        <li> <NavLink to="/admin" className="nav-link">Dashboard</NavLink></li>
                        <li> <NavLink to="/profile" className="nav-link">{primerNombre ? primerNombre : "Profile"}</NavLink></li>
                      </>
                    )
                  }
                 else{

                    return(
                      <>
                      
                        <li>  <NavLink to="/login" className="nav-link">Iniciar Sesion</NavLink> </li>
                        <li>  <NavLink to="/registro" className="nav-link">Registro</NavLink> </li>
                      </>
                    )
                  } 
            })()}

            </ul>
            <Search/>
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

const navItemsLogin = [];
navItemsLogin.push({
  text: 'Iniciar Sesion',
  user: false,
  item_url: '/login'
});
navItemsLogin.push({
  text: 'Dashboard',
  user: false,
  item_url: '/admin'
});
navItemsLogin.push({
  text: 'Registro',
  user: true,
  item_url: '/registro'
});
navItemsLogin.push({
  text: 'Profile',
  user: false,
  item_url: '/profile'
});
// navItemsLogin.push({
//   text: 'Profile',
//   item_url: '/profile'
// });

export {NavComponent};
