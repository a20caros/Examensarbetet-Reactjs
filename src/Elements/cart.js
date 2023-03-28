import React, { useEffect } from 'react';
import '../CSS/cart.css'; 
import {useState } from 'react'; 

const Cart=({setCartProducts, cartProducts})=>{
    const [cartPrices, setCartPrice] = useState(0); 

    const removeProducts = (id) => {
        const newAmount = cartProducts.filter((item) => item.id !==id);
        setCartProducts(newAmount);
        totalPrice();
    };
   
    const totalPrice = () => {
        let cartPrice = 0;
        cartProducts.map(function(cartProduct) {
            cartPrice += cartProduct.price; 
          });
          setCartPrice(cartPrice);
    };
    
    useEffect(() =>{
        totalPrice();
    }, [cartProducts]);
    return(
       <div>
            <h1 id="yourCart">Din Varukorg</h1>
            {cartProducts.map((item) =>
            <div className="cartProductIthem" id="cartitems" key={item.id}>
                <img className="cartProductImg" src={item.img} />
                <p><b> {item.name} </b></p>
                <p>{item.price} kr</p>
                <p>{item.smell}</p>
                <p>{item.size}</p>
                <p>Antalet av produkten: {item.quantity}</p>
                <button id="removeProduct" onClick={() => removeProducts(item.id)}>X</button>
                </div>
            )}
            <div className='totalPrice'><h2>Totala priset: {cartPrices} kr</h2></div>
       </div>
    )
};
export default Cart; 