import { signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { auth } from "./config.js";


const email = document.querySelector('#email')
const password = document.querySelector('#pass')
const form = document.querySelector('#form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    // // console.log(event);
    // console.log(email.value);
    // console.log(password.value);
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => { 
    const user = userCredential.user;
    console.log(user);
    window.location = 'home.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

})
const updatepass = document.querySelector('#updatepass');
updatepass.addEventListener('click', function(){
    window.location = 'reset.html'
})