import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'
import Swal from 'sweetalert2'

const App = () => {
  const  input = useRef();
  const [data , setData] = useState(null);
  function Check(e){
    e.preventDefault();
    axios(` https:api.github.com/users/${input.current.value}`)
    .then((res)=>{
      setData(res.data) 
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Search complete",
        showConfirmButton: false,
        timer: 1500
      });
    }).catch((err)=>{
      alert("Enter Correct Username");
    })
    
  }



  return (
    <>
    <h1 className='text-center text-white text-2xl font-bold mt-5'>Github Profile Search App</h1>
    <form onSubmit={Check} className='text-center mt-10 flex justify-center items-center gap-2'>
      <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs"  ref={input} />
      <button type='submit' className="btn w-[100px]">Check</button>
    </form>
    <div className=''>
      {/* {data !== null ?   <h1>{data.bio}</h1> : <h1>loding...</h1>} */}
      {data !== null ?(
       [ 
        <div className=' w-[50%] mx-auto mt-10 text-center'>
        <img className='m-auto w-[200px]' src={data.avatar_url} alt="" />
       <h1 className='text-white text-2xl mt-2'> {data.name}</h1>
       <h1 className='text-white'> {data.bio}</h1>
       {/* <p className='text-white mt-3 cursor-pointer'> <a className='border-2 border-solid p-2' target='_blank' href={data.blog === '' ? alert('no projects avalible'): data.blog}> All of your projects is here</a> </p>  */}

</div>
       
        ]

      ):<h1></h1>
      }
      
    
     
    </div>

    
    </>
  )
}

export default App