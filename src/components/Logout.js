import { getAuth, signOut } from "firebase/auth";
import "../css/profile.css";
import { useNavigate } from 'react-router-dom';
import { navItemsLogin } from "./NavComponent";
import { useEffect } from "react";




function Logout({}) {

    const userDataString = localStorage.getItem('userData');
    const userData = JSON.parse(userDataString);

    useEffect(() => {
        if(!userData) {
            navItemsLogin[2].user=false;
            console.log(navItemsLogin);
        }
    },[]);

   

    const navigate = useNavigate();

    function logOutFromCineclub(){

        localStorage.removeItem('userData');
        console.log("loggin out")
        console.log(userData);
        const auth = getAuth();
            signOut(auth).then(() => {
            // Sign-out successful.
            console.log(auth)
            }).catch((error) => {
            // An error happened.
            });
            
            console.log(navigate);

            // Redirige a la página deseada
            // history.push('/');
    }

    if(!userData){
        return(
            <h1>Esta pagina deberia estar escondida si no hay datos de usuario</h1>
        )
    }else{
        return(
            <div className="container my-4 firebase-profile-cont">
                <h1>Perfil:</h1>
                <img src={userData.photoURL} alt={`${userData.displayName} Photo`}/>
                <p><b>Nombre</b>: {userData.displayName}</p>
                <p><b>Email:</b> {userData.email}</p>
                
                <button type="button" onClick={logOutFromCineclub}>
                    Logout from google
                </button>
            </div>
        )
    }

   
}



export default Logout;