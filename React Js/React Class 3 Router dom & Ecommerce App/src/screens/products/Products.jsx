import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cart from '../../components/Cart'

const Products = () => {
    const params = useParams()
    const [data , setData] = useState([])
    console.log(params);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        }).catch((err)=>{
            console.log(err);
        })

    }, [])
  return (
    <>
    <div className='flex justify-center flex-wrap gap-5 mt-5'>
        {data.length > 0 ? data.map((items )=>{
            return  <Cart key={items.id} title={items.title} description={items.description} src={items.image} price={items.price}/>
        

        }): <h1>loading..</h1> }
    </div>
    
    </>
  )
}

export default Products