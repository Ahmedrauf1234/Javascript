import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = (props) => {
  const navigate = useNavigate();
  const singlrProductPage = ()=>{
    navigate(`/singleProduct/${props.id}`)
  }
  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-[100px]' src={props.src} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.price}</p>
    <p>{props.discription}</p>
    <div className="card-actions justify-end">
      <button onClick={singlrProductPage} className="btn btn-primary">Show Now</button>
    </div>
  </div>
</div>
   
    </>
  )
}

export default Cart