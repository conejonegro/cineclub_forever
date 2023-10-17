import { Route, Routes } from "react-router";
import {NavComponent} from "./NavComponent";
import HomePage from "./HomePage";
import { Pelicula } from "./Pelicula";
import Contacto from "../pages/Contacto";
import PeliculaDetalle from "../pages/pelicula-detalle";
import peliculasData from "../json/peliculasData";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import {TmdbApiCall} from "./TmdbAPICall";
import Logout from "./Logout";
import Login from "../pages/Login";
import Dashboard from "../dashboard/Dashboard";
import Registro from "../pages/Registro";
import ProtectedRoutes from "./ProtectedRoutes";


function CineclubRoutes(){

    return(
       
        <BrowserRouter>
            <NavComponent />
            <Routes>

                <Route path="/" element= {<TmdbApiCall />} />
                <Route path="/peliculas" element={ <TmdbApiCall titulo="Todas las Peliculas" json={peliculasData} />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/peliculas-detalle/:slug" element={ <PeliculaDetalle /> } />
                <Route element={<ProtectedRoutes />}>
                    <Route path="/login" element={ <Login /> } />
                </Route>
                <Route path="/Logout" element={ <Logout /> } />
                <Route path="/admin" element={ <Dashboard /> } />
                <Route path="/registro" element={ <Registro /> } />
                <Route path="/profile" element={ <Logout /> } />
                <Route path="*" element={<p>Not Found 404</p>} />

            </Routes>
            <Footer />
            <ScrollToTop />
        </ BrowserRouter>
    // {/* <AppiCall /> */}
    )
}

export default CineclubRoutes;