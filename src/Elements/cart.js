import React from 'react';
import '../CSS/cart.css'; 

const Cart=({setCartProducts, cartProducts})=>{
    const removeProducts = (id) => {
        const newAmount = cartProducts.filter((item) => item.id !==id);
        setCartProducts(newAmount);
    };
    return(
       <div>
            <h1 id="yourCart">Din Varukorg</h1>
            {cartProducts.map((item) =>
            <div className="cartProductIthem" key={item.id}>
                <img className="cartProductImg" src={item.img} />
                <p><b> {item.name} </b></p>
                <p>{item.price}</p>
                <p>{item.smell}</p>
                <p>{item.size}</p>
                <button className="removeProduct" onClick={() => removeProducts(item.id)}>X</button>
                </div>
              
            )}
       </div>
    )
};
export default Cart; 