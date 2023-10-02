import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCl6EWAFXxXoCjIRiDfnRPZUL7BA2h5kg",
    authDomain: "chat-hub-d65dd.firebaseapp.com",
    projectId: "chat-hub-d65dd",
    storageBucket: "chat-hub-d65dd.appspot.com",
    messagingSenderId: "455924680200",
    appId: "1:455924680200:web:60a97475f252a5c11eb3bd",
    measurementId: "G-CGSYQEWJ44"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
console.log(auth);
export const storage = getStorage();
export const db = getFirestore()