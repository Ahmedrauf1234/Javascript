import React, { useRef, useState } from 'react'

export const App = () => {
  const [counter , setCounter] = useState(1);
  const [emails , setemails] = useState('');
  const [passwords , setPasswords] = useState('');
  const email =  useRef();
  const password = useRef();
  const addCounter = (e)=>{
    e.preventDefault();
    setCounter(counter+1)
    console.log(email.current.value);
    console.log(password.current.value);
    setemails(email.current.value)
    setPasswords(password.current.value)


    
  }
  return (
  <>
  <form onSubmit={addCounter}>
    <h1>{counter}</h1>
    <input className='border-2 border-solid border-black' type="text" name="" id="" ref={email}/> <br /> <br/>
    <input className='border-2 border-solid border-black' type="password" name="" id="" ref={password}/> <br /> <br />
    <button  className='border-2 border-solid border-black px-5' type='submit'>Login</button>
  </form>
  <div>
    <h3>{emails}</h3>
    <h3>{passwords}</h3>
  </div>

  </>
  )
}
export default App
