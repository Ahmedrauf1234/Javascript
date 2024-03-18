
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAetgu8lDKbGEHLlU4Tsckuo2w0Cg4TBsk",
  authDomain: "react-firebase-85df5.firebaseapp.com",
  projectId: "react-firebase-85df5",
  storageBucket: "react-firebase-85df5.appspot.com",
  messagingSenderId: "878432790563",
  appId: "1:878432790563:web:0640e83d86cec7b39be996",
  measurementId: "G-30HSYREJ47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

