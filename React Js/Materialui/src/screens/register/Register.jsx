import { TextField , Button, Box, CircularProgress  } from '@mui/material'

import React, { useRef, useState } from 'react'

const Register = () => {
  //usestate
  const [loding , setLoding] = useState(false)
  //Form value
  const email = useRef()
  const password = useRef()

  //login
  const Register = (event)=>{
    event.preventDefault();
    console.log('login clicked');
    console.log(email.current.value);
    console.log(password.current.value);


  }
  return (
   <Box sx={{height:'80vh'}} className='d-flex justify-content-center align-item-center'>
   <form onSubmit={Register} className='d-flex justify-content-center flex-column w-25 gap-5 '>
   <TextField type='email' id="standard-basic" label="Email" variant="standard" inputRef={email} />
   <TextField type='password' id="standard-basic" label="Password" variant="standard"  inputRef={password}/>
   <Button type='submit'  variant="contained">{loding ? <CircularProgress sx={{color:'white'}} size={20} /> : 'Register'}</Button>
   </form>
   
   </Box>
  )
}

export default Register