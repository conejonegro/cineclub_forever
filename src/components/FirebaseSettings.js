// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4inu3nJ8z6w9zLNyImLLpnBE_A-jnLKw",
  authDomain: "cineclub-forever.firebaseapp.com",
  databaseURL: "https://cineclub-forever-default-rtdb.firebaseio.com",
  projectId: "cineclub-forever",
  storageBucket: "cineclub-forever.appspot.com",
  messagingSenderId: "136815813538",
  appId: "1:136815813538:web:e33c7164516bb34a4448fb",
  databaseURL: "https://cineclub-forever-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const FirebaseSettings = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(FirebaseSettings);

export default FirebaseSettings;