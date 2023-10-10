import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import "../css/login.css";
import { Link } from "react-router-dom";
import cineclubLogo from "../img/cineclub-logo.png";
import { useEffect, useState } from "react";

// //TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
      apiKey: "AIzaSyB4inu3nJ8z6w9zLNyImLLpnBE_A-jnLKw",
      authDomain: "cineclub-forever.firebaseapp.com",
      databaseURL: "https://cineclub-forever-default-rtdb.firebaseio.com",
      projectId: "cineclub-forever",
      storageBucket: "cineclub-forever.appspot.com",
      messagingSenderId: "136815813538",
      appId: "1:136815813538:web:e33c7164516bb34a4448fb"
    };

    const app = initializeApp(firebaseConfig);

    const provider = new GoogleAuthProvider();



    
    


function Login() {

    const [user, setUser] = useState(null);
    const [data, setData] = useState('');

    useEffect( () => {
        

    },[] );


    function loginWithGoogle(){
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
     
    }

    console.log(user)
    if(user){
        return(
            <h1>estas logueado</h1>
        )
    }else{
        return(
            <section className="my-4">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-3 d-flex justify-content-center">
                            <img src={cineclubLogo} className="img-fluid" alt="Cineclub logo by Carlos" width={350}/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    {}
                                    <button type="button" className="btn btn-primary btn-floating mx-1" onClick={loginWithGoogle}>
                                        <i className="fab fa-facebook-f">Google</i>
                                    </button>
                                </div>
    
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">Or</p>
                        </div>
    
                        
                        <div className="form-outline mb-4">
                            <input type="email" id="form3Example3" className="form-control form-control-lg"
                            placeholder="Enter a valid email address" />
                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                        </div>
    
                        
                        <div className="form-outline mb-3">
                            <input type="password" id="form3Example4" className="form-control form-control-lg"
                            placeholder="Enter password" />
                            <label className="form-label" htmlFor="form3Example4">Password</label>
                        </div>
    
                        <div className="d-flex justify-content-between align-items-center">
                            
                            <div className="form-check mb-0">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                            <label className="form-check-label" htmlFor="form2Example3">
                                Remember me
                            </label>
                            </div>
                            <a href="#!" className="text-body">Forgot password?</a>
                        </div>
    
                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button type="button" className="btn btn-primary btn-lg">Login</button>
                            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/sign-in"
                                className="link-danger">Register</Link></p>
                        </div>
    
                        </form>
                    </div>
                    </div>
                </div>
     
            </section>
        )
    }

   

}

export default Login;
