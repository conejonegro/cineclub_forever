import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../css/dark-mode.css";
import React, { useContext } from "react";
import { UserContext } from "./UserProvider";
import DarkModeBTN from "./darkModeBTN/DarkModeBTN";


function NavComponent() {
  const userLocal = localStorage.getItem("userData");
  const userData = JSON.parse(userLocal);
 
  const { darkMode } = useContext(UserContext);

  return (
    <>
    <Navbar
      
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      expand="lg"
    >
      <Container>
        <NavLink to="/" className="navbar-brand" id="nav_logo">
          <img src="/static/cineclub-transformed-min.png" alt="Cineclub Logo" />
          Cineclub Forever
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="nav-ul">
              {navItems.map((e) => (
                <li>
                  <NavLink to={e.item_url} className="nav-link" key={e.text}>
                    {e.text}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className="nav-ul nav-login">
              {(() => {
                if (userData) {
                  return (
                    <>
                      {/* <li> <NavLink to="/admin" className="nav-link">Dashboard</NavLink></li> */}
                      <li>
                        {" "}
                        <NavLink to="/logout" className="nav-link">
                          Profile
                        </NavLink>
                      </li>
                    </>
                  );
                } else {
                  return (
                    <>
                      <li>
                        {" "}
                        <NavLink to="/login" className="nav-link">
                          Iniciar Sesion
                        </NavLink>{" "}
                      </li>
                      <li>
                        {" "}
                        <NavLink to="/registro" className="nav-link">
                          Registro
                        </NavLink>{" "}
                      </li>
                    </>
                  );
                }
              })()}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <DarkModeBTN />
    </>
  );
}
const navItems = [];
navItems.push({
  text: "Peliculas",
  item_url: "/peliculas",
});
navItems.push({
  text: "Contacto",
  item_url: "/contacto",
});

const navItemsLogin = [];
navItemsLogin.push({
  text: "Iniciar Sesion",
  user: false,
  item_url: "/login",
});

navItemsLogin.push({
  text: "Registro",
  user: true,
  item_url: "/registro",
});
navItemsLogin.push({
  text: "Profile",
  user: false,
  item_url: "/profile",
});

export { NavComponent };
