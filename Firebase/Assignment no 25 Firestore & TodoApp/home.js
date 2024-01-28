import {    onAuthStateChanged,signOut  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./config.js";
const logout = document.querySelector('#logout-btn')


onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      window.location = 'login.html'
    }
  });

  //==========================logout work=================>>\
  logout.addEventListener('click',()=>{
    signOut(auth).then(() => {
        window.location = 'login.html'
      }).catch((error) => {
       console.log('error');
      });
  })

  //=================================Ended=======================>>
  