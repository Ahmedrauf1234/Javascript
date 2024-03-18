// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBS064auiglN97yr8dvVe3TY_lLeVc_sco",
  authDomain: "react-firebase-5815e.firebaseapp.com",
  projectId: "react-firebase-5815e",
  storageBucket: "react-firebase-5815e.appspot.com",
  messagingSenderId: "97076430500",
  appId: "1:97076430500:web:7326137ca60f68c1b94831",
  measurementId: "G-S8XZ8NV19E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);