import React from 'react'
import { useParams } from 'react-router-dom'

const Singleproduct = () => {
    const  params = useParams();
    console.log();
  return (
    <div>Singleproduct {params}</div>
  )
}

export default Singleproduct