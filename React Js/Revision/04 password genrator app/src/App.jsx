import React, { useEffect, useState } from 'react'

const App = () => {
  //================initialization==================>>
  const [password , setPassword] = useState("")
  const [length  , setLength] = useState(18);
  const [numbers  , setNumbers] = useState(false);
  const [symbols  , setSymbols] = useState(false);

  const includeNumber = (e)=>{
    setNumbers(e.target.checked);
  }
  const includeSymbol = (e)=>{
    setSymbols(e.target.checked);
  }

  const passwordGenrator = ()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers){
      str += '0123456789'
    }
    if(symbols){
      str += '!@#$%^&*'
    }
    for(let i = 0; i < length; i++){
      let randomNumber = Math.floor(Math.random()*str.length)
        let char = str.charAt(randomNumber)
        pass += char
    }
    setPassword(pass)
  }
  useEffect(()=>{
    passwordGenrator()
  } , [length ,  numbers , symbols])
  return (
    <>
    <h2>{password}</h2>
    <label htmlFor="length">{length}</label>
    <input type="range" name="" id="length" min={5} max={20} onChange={(e)=>setLength(e.target.value)} value={length} /> <br />

    <label htmlFor="number">Number</label>
    <input type="checkbox" name="" id="number" onChange={includeNumber} /> <br />

    <label htmlFor="symbol">Symbol</label>
    <input type="checkbox" name="" id="symbol" onChange={includeSymbol} />



    </>
  )
}

export default App