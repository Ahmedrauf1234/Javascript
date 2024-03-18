import React, { useEffect } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/Firebaseconfig';


const ProtectedRoutes = ({component}) => {
    useEffect(()=>{
        onAuthStateChanged(auth , (user)=>{
            if(user){
                console.log('user hai');
            }else{
                console.log("nhi hai");
            }
        })
    }, [])
  return (
    component
  )
}

export default ProtectedRoutes