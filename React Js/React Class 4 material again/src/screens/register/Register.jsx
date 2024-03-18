import { TextField , Button, Box, CircularProgress } from '@mui/material'
import React, { useRef, useState } from 'react'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase/Firebaseconfig';
import { useNavigate } from 'react-router-dom';
import { Login } from '@mui/icons-material';


const Register = () => {
  //=======================Navigate=========================>>
  let navigate = useNavigate()
  //============================Usestate=========================>>
  const [loading , setLoading] = useState(false)
  //============================Form Value==================>>
  const email = useRef();
  const password = useRef();
  //=================Login=========================>>
  const Register = (event)=>{
    event.preventDefault();
    setLoading(true)
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navigate('/Login')
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Error')
    // ..
  }).finally(()=>{
    setLoading(false);
  })

  }
  return (
    <Box sx={{height:'80vh'}} className='d-flex justify-content-center align-item-center'>
    <form onSubmit={Register} className='d-flex flex-column justify-content-center w-25 gap-5  ' >
    <TextField type='email' id="standard-basic" label="Email" variant="standard" inputRef={email} />
    <TextField type='password' id="standard-basic" label="Password" variant="standard" inputRef={password} />
    <Button type='submit' variant="contained">{loading ? <CircularProgress sx={{color:'white'}} size={20} /> : 'Register'}</Button>
    </form>

    </Box >
  )
}

export default Register