import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart'

const Home = () => {
  //========================storing data====================>>
  const [data , setData] = useState(null)
  //=========================End======================>>
  useEffect(()=>{
    axios('https://dummyjson.com/products')
    .then((res)=>{
      console.log(res.data.products);
      setData(res.data.products)
    }).catch((err)=>{
      console.log(err);
    })
  },[])


  return (
    <div className='flex justify-center gap-4 flex-wrap mt-4'>
      {data ? data.map((items , index)=>{
        return <Cart url={items.thumbnail} title={items.title} desc={items.description}/>
      }): <h2>Loading...</h2>}
    </div>
  )
}

export default Home