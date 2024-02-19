import { useState } from "react";

function App(){
  // let num = 5; ese varible nh banana
  let [num , setNum] = useState(0) //kisi bhi word  k peeche use likha ho usko hook bolte hen..0 num ki value hai (ye wala hisab hai let num = 0)
  function Addnum(){
    // num = num+1 ese nh krsakhte increment
    setNum(num+1) //ese krte hen
    console.log(num);
  }
  const removeNum = ()=>{
    if(num === 0){
      console.log('error');
    }else{
      setNum(num - 1)

    }
  }

  return(
    <>
    <h1>Hello World  {num}</h1>
    <button onClick={Addnum}>Add</button>
    <button onClick={removeNum}>Subtract {num} </button>
    </>
  )
}
export default App