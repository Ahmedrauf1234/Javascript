import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Cart from './Cart'



const App = () => {
  const [data , setData] = useState(null);
  useEffect(()=>{
    axios('https://fakestoreapi.com/products')
    .then((res)=>{
      console.log(res.data);
      setData(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }, [])


  return (
    <>
    <Navbar/>
    <h1 className='text-center mt-3 text-white text-4xl'>My Products</h1>
    <div className='flex flex-wrap mt-10 justify-center items-center gap-5'>
    {/* <Cart title='jalebi' decription={'lorem ipsum 123'}/>
    <Cart title='jalebi' decription={'lorem ipsum 123'}/>
    <Cart title='jalebi' decription={'lorem ipsum 123'}/>
    <Cart title='jalebi' decription={'lorem ipsum 123'}/>
    <Cart title='jalebi' decription={'lorem ipsum 123'}/> */}
    {data !== null && data.length > 0 ? data.map((items , index)=>{
      return <Cart key={items.id} src={items.image} title={items.title}  decription={items.description
      }/>

    }): <h1 className='text-white text-3xl' >Loding</h1> }

    </div>




    </>
  )
}

export default App