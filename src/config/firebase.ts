// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzEGyMQhbYLsVQKjAhauEKYi2z8tOHJMU",
  authDomain: "homework-tracker-9c4bd.firebaseapp.com",
  projectId: "homework-tracker-9c4bd",
  storageBucket: "homework-tracker-9c4bd.appspot.com",
  messagingSenderId: "893481068799",
  appId: "1:893481068799:web:09ca09fa3a6f4d294f04ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      localStorage.setItem("name", JSON.stringify(result.user.displayName));
      localStorage.setItem("email", JSON.stringify(result.user.email));
      localStorage.setItem("pfp", JSON.stringify(result.user.photoURL));

      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};
