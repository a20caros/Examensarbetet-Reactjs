import './App.css';
import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Elements/Home';
import Navbar from './Elements/Navbar';
import ProductShop from './Elements/productShop';
import Footer from './Elements/Footer';
import ShopContextProvider from './Elements/Perfume';
import PerfumeSite from './Elements/perfumeSite';



const App=()=>{
  return (
    <>
    <ShopContextProvider>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/perfumeSite' element={<PerfumeSite/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </ShopContextProvider>
    </>
  )
}
export default App;
