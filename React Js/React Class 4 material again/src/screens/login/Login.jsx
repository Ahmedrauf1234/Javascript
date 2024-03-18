import { TextField , Button, Box, CircularProgress } from '@mui/material'
import React, { useRef, useState } from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase/Firebaseconfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  //=======================navigate===============>>
  let navigate = useNavigate()
  //============================Usestate=========================>>
  const [loading , setLoading] = useState(false)
  //============================Form Value==================>>
  const email = useRef();
  const password = useRef();
  //=================Login=========================>>
  const login = (event)=>{
    event.preventDefault();
    setLoading(true)
    // console.log('login clicked');
    // console.log(email.current.value);
    // console.log(password.current.value);
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // setLoading(false)
    navigate('/')

   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  }).finally(()=>{
    setLoading(false);
  })
    
    

  }
  return (
    <Box sx={{height:'80vh'}} className='d-flex justify-content-center align-item-center'>
    <form onSubmit={login} className='d-flex flex-column justify-content-center w-25 gap-5  ' >
    <TextField type='email' id="standard-basic" label="Email" variant="standard" inputRef={email} />
    <TextField type='password' id="standard-basic" label="Password" variant="standard" inputRef={password} />
    <Button type='submit' variant="contained">{loading ? <CircularProgress sx={{color:'white'}} size={20} /> : 'Login'}</Button>
    </form>

    </Box >
  )
}

export default Login