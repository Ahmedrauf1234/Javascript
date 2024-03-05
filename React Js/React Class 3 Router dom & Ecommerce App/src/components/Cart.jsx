import React from 'react'

const Cart = ({src ,description, price , title}) => {
  return (
    <>
   <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-[200px]' src={src} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description.slice(0 , 10)}...</p>
    {/* <p>{price}</p> */}
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Show now</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Cart