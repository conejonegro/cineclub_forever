import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//       apiKey: "AIzaSyB4inu3nJ8z6w9zLNyImLLpnBE_A-jnLKw",
//       authDomain: "cineclub-forever.firebaseapp.com",
//       databaseURL: "https://cineclub-forever-default-rtdb.firebaseio.com",
//       projectId: "cineclub-forever",
//       storageBucket: "cineclub-forever.appspot.com",
//       messagingSenderId: "136815813538",
//       appId: "1:136815813538:web:e33c7164516bb34a4448fb"
//     };

    // const app = initializeApp(firebaseConfig);

    // const provider = new GoogleAuthProvider();



    // const auth = getAuth();
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...
    //   }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //   });
    


function Login() {

    return(
        <h1>hola Login</h1>
    )

}

export default Login;
