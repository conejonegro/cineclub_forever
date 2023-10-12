import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import "../css/login.css";
import { Link } from "react-router-dom";
import cineclubLogo from "../img/cineclub-logo.png";
import { useEffect, useState } from "react";
import FirebaseSettings from "../components/FirebaseSettings";
import { useNavigate } from 'react-router-dom';

const app = FirebaseSettings;

function SignIn(){

const [email, setInputEmail] = useState("");
const [password, setInputPassword] = useState("");
const [logged, setLogged] = useState();
const [error, setError] = useState();
const navigate = useNavigate();

 //Functions
 function handleValueEmail(e){

    setInputEmail(e.target.value);
    console.log(email);

}
 function handleValuePassword(e){

    setInputPassword(e.target.value);
    console.log(password);

}
const userPasswordAuth = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setLogged(true);
        console.log(user);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
        console.log(errorMessage);
        // ..
    });
}
const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Valor del input:', email);
   
  };
// AUTH 


return(
            <section className="my-4">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-3 d-flex justify-content-center">
                            <img src={cineclubLogo} className="img-fluid" alt="Cineclub logo by Carlos" width={350}/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit}>
    
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold  mb-0">Registrar:</p> 
                        </div>
    
                        
                        <div className="form-outline mb-4">
                            <input type="email" id="form3Example3" className="form-control form-control-lg"
                            placeholder="Enter a valid email address" value={email} onChange={handleValueEmail} />
                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                        </div>
    
                        
                        <div className="form-outline mb-3">
                            <input type="password" id="form3Example4" className="form-control form-control-lg"
                            placeholder="Enter password" value={password} onChange={handleValuePassword} />
                            <label className="form-label" htmlFor="form3Example4"  >Password</label>
                        </div>

                        {logged ? <p className="alert alert-success">Has sido registrado con exito, ahora puedes hacer login</p> : <span className="">{error}</span> }

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button type="submit" onClick={userPasswordAuth}  className="btn btn-primary btn-lg">Registrar</button>
                        </div>
    
                        </form>
                    </div>
                    </div>
                </div>
     
            </section>
    )
}

export default SignIn;