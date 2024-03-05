import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <ul className='flex justify-evenly mt-3 '>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='about'>About</Link>
            </li>
            <li>
                <Link to='contacts'>Contacts</Link>
            </li>
            <li>
                <Link to='products/wjwhfjhf'>products</Link>
            </li>
        </ul>

        </nav>
        
        
        </>
  )
}

export default Navbar