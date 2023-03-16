import React from 'react';
import '../CSS/cart.css'; 

const Cart=({cartProducts})=>{
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
                </div>
              
            )}
       </div>
    )
};
export default Cart; 