import React, { useRef } from 'react'
import { auth } from '../config/firebase/Firebaseconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const Email = useRef();
  const password = useRef();
  const navigate = useNavigate();
   const loginCheck = (event)=>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, Email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
   }
  return (
    <form onSubmit={loginCheck}>
    <input type="text" placeholder='Enter Email' ref={Email}/>
    <input type="text" placeholder='Enter Password' ref={password} />
    <button type='submit'>Login</button>
</form>
  )
}

export default Login