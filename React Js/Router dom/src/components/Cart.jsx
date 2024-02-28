import React from 'react'

const Cart = (src ,description, price , title) => {
  return (
    <>
   <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={src} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
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