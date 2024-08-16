import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "../css/dark-mode.css";
import { useEffect, useState } from "react";

function NavComponent() {
  const darkmodeStateFromlocal = localStorage.getItem("darkmode") === "true";
  const [darkMode, setDarkMode] = useState(darkmodeStateFromlocal);
  const userLocal = localStorage.getItem("userData");
  const userData = JSON.parse(userLocal);

  function toggleDarkLight() {
    if (darkMode) {
      localStorage.setItem("darkmode", false);
      setDarkMode(false);
    } else {
      localStorage.setItem("darkmode", true);
      setDarkMode(true);
    }
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Navbar bg="light" expand="lg">
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
        <div
          id="darkModeBTN"
          className="d-flex flex-column ms-2 rounded-4 border p-2 border-dark row-gap-2 align-items-center justify-content-center"
          onClick={toggleDarkLight}
        >
          {darkMode ? <MdDarkMode /> : <MdOutlineLightMode />}
          <div>{darkMode ? "Dark Mode" : "Light Mode"}</div>
        </div>
      </Container>
    </Navbar>
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
