import React, {createContext, useState, useContext} from "react";
import { shopContext } from "./Perfume";
import allProducts  from "./Perfume";

export const cartContext = createContext(null); 
const products = JSON.parse(allProducts);
 //If we want to add ny products
 const getContextCart = () => {
    let shopCart ={};
    for (let i=1; i < products.length +1; i++){
        shopCart[i] = 0; 
    }
    return shopCart;
}
   

export const CartContextProvider = (props) => {
    
   
    const [shopCartItem, setShopItems] = useState(getContextCart()); 
    //console.log(shopCartItem);
    //Function that add to the cart
    const addCart = (id) => { 
        setShopItems((prev) => ({...prev, [id]: prev[id] + 1}));
       console.log(id);
     
    };
    //Remove product from cart
    const removeFromCart = (idItem) => { 
        setShopItems((prev) => ({...prev, [idItem]: prev[idItem] - 1}));

    };


   
   const valueContext ={shopCartItem, addCart, removeFromCart}; 
    return (
        <cartContext.Provider value={valueContext}>{props.children}</cartContext.Provider>);
      };
export default CartContextProvider;