import React from "react";
import '../CSS/ProductStyle.css';
import { Link } from 'react-router-dom';

const ShopMenPerfume = ({item, addToCart}) => {
    const {name, smell, size, price, img} = item;

    
   return  (     
        <div className='fullContainer'>
            <div className="perfumeContainer">
                <img src={img}/>
                <p><b>{name}</b></p>
                <p>{price} kr</p>
                <p>{smell}</p>
                <p>{size}</p>
                <Link to="/cart"><button className="addToCartBtn" onClick={() => addToCart(item)}>+</button></Link>
            </div>
        </div>
        
    );
   
};
export default ShopMenPerfume;