// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCl6EWAFXxXoCjIRiDfnRPZUL7BA2h5kg",
    authDomain: "chat-hub-d65dd.firebaseapp.com",
    projectId: "chat-hub-d65dd",
    storageBucket: "chat-hub-d65dd.appspot.com",
    messagingSenderId: "455924680200",
    appId: "1:455924680200:web:60a97475f252a5c11eb3bd",
    measurementId: "G-CGSYQEWJ44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);