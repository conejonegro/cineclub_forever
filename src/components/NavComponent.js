import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../css/dark-mode.css";
import React, { useContext } from "react";
import { UserContext } from "./UserProvider";
import DarkModeBTN from "./darkModeBTN/DarkModeBTN";
import { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import  "../css/nav.css";

function NavComponent() {
  const userLocal = localStorage.getItem("userData");
  const userData = JSON.parse(userLocal);

  const { darkMode } = useContext(UserContext);

  console.log("misciclos", navItems)

  return (
    <>
      <Navbar
        bg={darkMode ? "dark" : "light"}
        variant={darkMode ? "dark" : "light"}
        expand="lg"
      >
        <Container>
          <NavLink to="/" className="navbar-brand" id="nav_logo">
            <img
              src="/static/cineclub-transformed-min.png"
              alt="Cineclub Logo"
            />
            Cineclub Forever
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <ul className="nav-ul">
                {navItems.map((e, index) =>
                  index === 1 ? (
                    <NavDropdown title="Ciclos" id="basic-nav-dropdown" key={index}>
                      {e.ciclos.map((ciclo) => (
                        <NavLink to={ciclo.URLciclo} key={ciclo.nombre} className="ciclos__nav-item">
                          {ciclo.nombre}
                        </NavLink>
                      ))}
                    </NavDropdown>
                  ) : (
                    <li key={e.text}>
                      <NavLink to={e.item_url} className="nav-link">
                        {e.text}
                      </NavLink>
                    </li>
                  )
                )}
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
  text: "Ciclos",
  item_url: "/ciclos",
  ciclos: [
    {
      nombre: "Teens",
      URLciclo: "/ciclos/teens",
    },
    {
      nombre: "Mexicanas",
      URLciclo: "/ciclos/mexicanas",
    },
    {
      nombre: "Cyberpunk",
      URLciclo: "/ciclos/cyberpunk",
    },
    {
      nombre: "Biograficas",
      URLciclo: "/ciclos/biograficas",
    },
  ],
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
