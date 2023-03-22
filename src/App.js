import './App.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Elements/Home';
import Navbar from './Elements/Navbar';
import WriteProductsMen from './Elements/writeProductsMen';
import PerfumeSite from './Elements/PerfumeSite';
import WriteProducts from './Elements/writeProducts';
import Cart from './Elements/cart';
import {useState} from 'react';


const App=()=>{
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (item) =>{
    setCartProducts([...cartProducts, item]);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/PerfumeSite' element={<PerfumeSite/>}/>
            <Route path='/writeProducts' element={<WriteProducts addToCart={addToCart} />}/>
            <Route path='/writeProductsMen' element={<WriteProductsMen addToCart={addToCart}/>}/>
            <Route path='/cart' element={<Cart cartProducts={cartProducts} setCartProducts={setCartProducts}/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}
export default App;
