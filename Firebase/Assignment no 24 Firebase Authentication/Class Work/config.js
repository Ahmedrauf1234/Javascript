 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

 const firebaseConfig = {
   apiKey: "AIzaSyBUo4ZFHyexbxOu7RW9nlTZypeM3fjgXuA",
   authDomain: "fir-learning-2414e.firebaseapp.com",
   projectId: "fir-learning-2414e",
   storageBucket: "fir-learning-2414e.appspot.com",
   messagingSenderId: "429569237143",
   appId: "1:429569237143:web:b6249dba9d1d397c9a09d2",
   measurementId: "G-TGJY0GBFHZ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);