import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cart from '../../components/Cart';

const Singleproduct = () => {
    const [data , setData] = useState(null);
    const params = useParams();
    //===========================Use Effect======================>>
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    } , [])

  return (
    <div className='flex justify-center mt-5'>{data ? <Cart title={data.title} discription={data.description} src={data.image} price={data.price}/>  : <h2>Loading...</h2>}</div>
  )
}

export default Singleproduct