import React, { useContext } from 'react';
import { useCart} from 'react-use-cart';
import '../CSS/cart.css'; 

const Cart=()=>{
    const {
        isEmpty, 
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        totalItems,} = useCart();
    return(
       <div>
            <h1 id="yourCart">Din Varukorg</h1>
            {items.map((item, index) =>{
                return (
                <div className='cartProductIthem' key={index}>
                <img className="cartProductImg" src={item.img} />
                    <p>
                        {" "}
                        <b> {item.name} </b>
                    </p>
                    <p>{item.price}</p>
                    <p>{item.smell}</p>
                    <p>{item.size}</p>
                    <button className='removeProduct'onClick={()=>removeItem(item.id)}>X</button>
                </div>
                )
            })}
      
       </div>
    )
}
export default Cart; 