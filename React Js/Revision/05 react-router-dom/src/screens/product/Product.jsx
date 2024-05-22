import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cart from '../../components/Cart'

const Product = () => {
  //===================State==============>>
  const [data , setData] = useState([])

  //===========================Use Effect======================>>
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    } , [])
    //================params for dynamic routes===================>>
    const params = useParams()
    console.log(params);
  return (
    <div className='flex justify-evenly gap-5 flex-wrap mt-5'>
    { data.length > 0 ?   data.map((items )=>{
      return <Cart key={items.id} title={items.title} discription={items.description} src={items.image} price={items.price} id={items.id}/>
    }):<h3>Loading</h3>}

    </div>
  )
}

export default Product