import React from 'react'

const Button = (props) => {
    // console.log(props);
  return (
    <div>
        <button className='px-3 py-1 rounded bg-blue-400  hover:bg-black hover:text-white' onClick={props.func}>{props.name}</button>


       

    </div>
  )
}

export default Button