import './App.css';
import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Elements/Home';
import Navbar from './Elements/Navbar';
import Footer from './Elements/Footer';
import ShopContextProvider from './Elements/Perfume';
import PerfumeSite from './Elements/perfumeSite';
import ShopMenPerfume from './Elements/shopMenPerfume';
import Cart from './Elements/cart';
import { CartContextProvider } from './Elements/cart-context';


const App=()=>{
  return (
    <>
    <ShopContextProvider>
      <CartContextProvider>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/perfumeSite' element={<PerfumeSite/>}/>
            <Route path='/shopMenPerfume' element={<ShopMenPerfume/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </ShopContextProvider>
    </>
  )
}
export default App;
