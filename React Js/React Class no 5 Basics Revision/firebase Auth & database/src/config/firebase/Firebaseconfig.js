// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyChTwvI9GJqscYMN8F38Yf3Fdiqhz68HP0",
  authDomain: "fire-auth-store.firebaseapp.com",
  projectId: "fire-auth-store",
  storageBucket: "fire-auth-store.appspot.com",
  messagingSenderId: "988321136691",
  appId: "1:988321136691:web:23d72f6727bcf00329e346",
  measurementId: "G-J6LJG5CCGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 export const db = getFirestore(app);
