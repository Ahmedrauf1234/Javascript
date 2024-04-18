import React, { useRef } from 'react'
import { auth } from '../config/firebase/Firebaseconfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const Email = useRef();
    const password = useRef();
    const navigate = useNavigate()
    const registerCheck = (event)=>{
        event.preventDefault()
        // console.log(Email.current.value);
        // console.log(password.current.value);
        createUserWithEmailAndPassword(auth, Email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        navigate('/Login')
        })
        .catch((error) => {
      const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
        

    }

  return (
    <form onSubmit={registerCheck}>
        <input type="text" placeholder='Enter Email' ref={Email}/>
        <input type="text" placeholder='Enter Password' ref={password} />
        <button type='submit'>Register</button>
    </form>
  )
}

export default Register