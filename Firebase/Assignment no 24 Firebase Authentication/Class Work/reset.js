import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./config.js";



const email = document.querySelector('#email');
const form = document.querySelector('#form');
form.addEventListener('submit', function(e){
    e.preventDefault()
    sendPasswordResetEmail(auth, email.value)
  .then(() => {
    // Password reset email sent!
    console.log('congrats pass has been reset');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });

})