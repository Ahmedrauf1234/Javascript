import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from '../../screens/home/Home'
import About from '../../screens/about/About'
import Contact from '../../screens/contact/Contact'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Product from '../../screens/product/Product'
import Singleproduct from '../../screens/single-product/Singleproduct'

const RouterConfig = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='singleProduct/:id' element={<Singleproduct/>}/>


    </Routes>
    <Footer/> 
    </BrowserRouter>
  )
}

export default RouterConfig