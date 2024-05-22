import React, { useState } from 'react'
import Button from './Button';

const App = () => {
  const  [data , setData] = useState(10);
  const addCount = ()=>{
    console.log("clicked");
    setData(data + 1)
  }

  return (
    <>
    <h1 className='text-center text-4xl text-sky-300 mt-5 font-bold'>Hello world {data}</h1>
    <Button name="click" age={20} arr={['Ahmed' , 'talha']}  func={addCount}/>
    

    {/* <button onClick={addCount}>Counter</button> */}
    </>
  )
}

export default App