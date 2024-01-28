// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAqMHiJ_LHBmOFmJ6yD5KMw_aobeczueV8",
  authDomain: "firestore-practice-a6f85.firebaseapp.com",
  projectId: "firestore-practice-a6f85",
  storageBucket: "firestore-practice-a6f85.appspot.com",
  messagingSenderId: "945139196075",
  appId: "1:945139196075:web:72cbe800a7cd732becd7ee",
  measurementId: "G-WNPV0S6CL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
