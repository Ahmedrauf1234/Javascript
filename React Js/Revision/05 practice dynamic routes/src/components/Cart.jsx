import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate();
    const singleproductpage = ()=>{
        navigate('/singleProduct/5')
    }
  return (
    <>
    <h1>title</h1>
    <h1>Price</h1>
    <h1>discription</h1>
    <button onClick={singleproductpage}>shop now</button>

    </>
  )
}

export default Cart