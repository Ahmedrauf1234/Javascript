import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

export const App = () => {
  useEffect(()=>{ //use effect wo function hota hai jaise he haamri script load hogi use effect function call hojayega || 2nd parameter me dependency array hoti hai agar hum dependency array nh dete to jaise he page ki koi bhi state change hogi use effect call hota rahega is liye hum isko kahli nh chorte || agar array laga denge to state change hone per bar bar nh chgalega. || agar me chahraha k 1 specific state k change hone per use effect bar bar chale to hum array me state ka varible dedenge ex [length]. 3 types hen ye useeffect ki
    console.log('hello world');
  } , [])
  const [length , setlength ] = useState(0);
  const myVal = useRef()

  function myTextval(){
    setlength(myVal.current.value.length)
  }
  return (
    <>
     <h1 className='text-center mt-5'> My Text App </h1>
     <textarea className='border-2 border-solid border-red-400' name="" id="" cols="30" rows="10" onChange={myTextval} ref={myVal}></textarea> <br />
     {/* <button onClick={myTextval}>Add</button> */}
     <p>my text lenght is {length}</p>
    
    
    
     </>
  )
}
export default App