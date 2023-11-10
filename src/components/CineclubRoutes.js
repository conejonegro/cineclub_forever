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
import { UserProvider } from "./SearchProvider";
import { Navigate } from "react-router";
import SearchPage from "../pages/SearchPage";


const userDataString = localStorage.getItem('userData');
const userData = JSON.parse(userDataString);


function CineclubRoutes(){

    return(

        <BrowserRouter>
            
            <NavComponent />
            <Routes>

                <Route path="/" element= {<TmdbApiCall />} />
                <Route path="/peliculas" element={ <TmdbApiCall />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/peliculas-detalle/:slug" element={ <PeliculaDetalle /> } />
                
                <Route element={<ProtectedRoutes user={userData} />}>
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/registro" element={ <Registro /> } />
                    
                </Route>
                
                <Route path="/admin" element={ userData ? <Dashboard /> : <Navigate to="/" /> } />
                <Route path="/profile" element={userData ? <Logout /> : <Navigate to="/" />  } />
                <Route path="/search" element={<SearchPage />} />
                
                <Route path="*" element={<p className="container">Not Found 404</p>} />

            </Routes>
            <Footer />
            <ScrollToTop />
        </ BrowserRouter>
        
    // {/* <AppiCall /> */}
    )
}

export default CineclubRoutes;