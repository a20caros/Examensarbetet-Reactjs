import './App.css';
import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Elements/Home';
import Navbar from './Elements/Navbar';
import ProductShop from './Elements/productShop';
import Footer from './Elements/Footer';



const App=()=>{
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/ProductShop' element={<ProductShop/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App;
