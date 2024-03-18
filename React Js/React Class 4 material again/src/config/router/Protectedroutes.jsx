import React, { useEffect, useState } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase/Firebaseconfig'
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Protectedroutes = ({component}) => {
  //=====================Navigate User=================>>
  const Navigate = useNavigate()

  //===================State==============>>
  const [isUser , setIsUser] = useState(false)

  useEffect(()=>{
    onAuthStateChanged(auth , (user)=>{
      if(!user){
       Navigate('/login')
        
      }else{
        setIsUser(true)
        
      }
    })
    
  },[])
  return (
    isUser ? 
    component : <Typography variant='h1' color='initial'>Loading...</Typography>
  )
}

export default Protectedroutes