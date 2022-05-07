// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcCdPlLQwghx7CAXuAA0gL3RdnJg_1ygo",
    authDomain: "eleventh-assignment-5e03e.firebaseapp.com",
    projectId: "eleventh-assignment-5e03e",
    storageBucket: "eleventh-assignment-5e03e.appspot.com",
    messagingSenderId: "689850721822",
    appId: "1:689850721822:web:44b2cbae3ce1ab4714700f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;