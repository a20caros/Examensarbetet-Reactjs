import './App.css';
import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Elements/Home';
import Navbar from './Elements/Navbar';
import Footer from './Elements/Footer';
import WriteProductsMen from './Elements/writeProductsMen';
import PerfumeSite from './Elements/PerfumeSite';
import WriteProducts from './Elements/writeProducts';
import Cart from './Elements/cart';
import {CartProvider } from "react-use-cart";


const App=()=>{
  return (
    <>
      <CartProvider>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/PerfumeSite' element={<PerfumeSite/>}/>
            <Route path='/writeProducts' element={<WriteProducts/>}/>
            <Route path='/writeProductsMen' element={<WriteProductsMen/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}
export default App;
