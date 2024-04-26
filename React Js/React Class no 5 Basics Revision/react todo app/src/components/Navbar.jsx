import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <ul style={{listStyle:'none'}} className='d-flex justify-content-center gap-5 text-dark'>
      <li > <Link className='text-black' to="/">Home</Link> </li>
      <li> <Link to="About">About</Link> </li>
      <li> <Link to="contacts">Contacts</Link> </li>

      
    </ul>
  </nav>
  )
}

export default Navbar