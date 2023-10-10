import { getAuth, signOut } from "firebase/auth";



function Logout() {

    function logOutFromCineclub(){
        console.log("loggin out")
        const auth = getAuth();
            signOut(auth).then(() => {
            // Sign-out successful.
            console.log(auth)
            }).catch((error) => {
            // An error happened.
            });
    }

    

    return(
        <button type="button" onClick={logOutFromCineclub}>
            Logout from google
        </button>
    )
}



export default Logout;