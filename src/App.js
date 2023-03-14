import './App.css';
import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Elements/Home';
import Navbar from './Elements/Navbar';
import Footer from './Elements/Footer';

import PerfumeSite from './Elements/perfumeSite';
import WriteProducts from './Elements/writeProducts';
import Cart from './Elements/cart';
import { CartContextProvider } from './Elements/cart-context';


const App=()=>{
  return (
    <>

      <CartContextProvider>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/perfumeSite' element={<PerfumeSite/>}/>
            <Route path='/writeProducts' element={<WriteProducts/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
  
    </>
  )
}
export default App;
