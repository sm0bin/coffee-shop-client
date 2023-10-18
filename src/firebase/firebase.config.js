// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDOChBrjeWKRjIQkL9w9qqHx_NPgrSC-4",
    authDomain: "coffee-shop-b3b46.firebaseapp.com",
    projectId: "coffee-shop-b3b46",
    storageBucket: "coffee-shop-b3b46.appspot.com",
    messagingSenderId: "699966578887",
    appId: "1:699966578887:web:b9e55264de13d238495ee2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;