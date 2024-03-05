import React from 'react'
import { BrowserRouter, Route  , Routes} from 'react-router-dom'
import Home from '../../screens/home/Home'
import Contacts from '../../screens/contacts/Contacts'
import About from '../../screens/about/About'
import Navbar from '../../components/Navbar'
import Products from '../../screens/products/Products'

const Routers = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contacts' element={<Contacts/>} />
        <Route path='products/:id' element={<Products/>} />


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routers