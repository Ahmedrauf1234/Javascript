import React from 'react'

const Cart = ({title, src, decription}) => {
  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-[25rem]' src={src} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{decription.slice(0 , 30)}...</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div></>
  )
}

export default Cart