import './App.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Elements/Home';
import Navbar from './Elements/Navbar';
import WriteProductsMen from './Elements/writeProductsMen';
import PerfumeSite from './Elements/PerfumeSite';
import WriteProducts from './Elements/writeProducts';
import Cart from './Elements/cart';
import ImagesInfo from './Elements/imagesInfo';
import {useState} from 'react';


const App=()=>{
  const [cartProducts, setCartProducts] = useState([]);
  const [numberOfAProduct, setNumberOfAProduct] = useState(0);

  const addToCart = (item, callback) =>{
    const existingIndex = cartProducts.findIndex((product) => product.id === item.id);
    if (existingIndex !== -1) {
      const updatedProducts = [...cartProducts];
      updatedProducts[existingIndex] = {
        ...updatedProducts[existingIndex],
        quantity: updatedProducts[existingIndex].quantity + 1,
      };
      setCartProducts(updatedProducts);
    }else {
      // Product doesn't exist in cart yet, add new product
      const newProduct = {
        ...item,
        quantity: 1,
      };
      setCartProducts([...cartProducts, newProduct]);
    }
    setNumberOfAProduct(numberOfAProduct + 1);
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
            <Route path='/imagesInfo' element={<ImagesInfo/>}/>
            <Route path='/cart' element={<Cart cartProducts={cartProducts} setCartProducts={setCartProducts} numberOfAProduct={numberOfAProduct}/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}
export default App;
