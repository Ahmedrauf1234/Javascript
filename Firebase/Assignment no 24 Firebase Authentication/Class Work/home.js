import { signOut , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./config.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
      // ...
    } else {
      window.location = 'index.html'
    }
  });

console.log('Hello');

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
signOut(auth).then(() => {
  window.location = 'index.html'
}).catch((error) => {
  // An error happened.
});

})