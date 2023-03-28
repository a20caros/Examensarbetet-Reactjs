import React from "react";
import '../CSS/ProductStyle.css';
import { Link } from "react-router-dom";
const PerfumeSite = ({item, addToCart})=> {
    const {name, smell, size, price, img, id} = item;
   
         
   return  (     
        <div className='fullContainer'>
            <div className="perfumeContainer">
                <img src={img}/>
                <p><b>{name}</b></p>
                <p>{price +' kr'}</p>
                <p>{smell}</p>
                <p>{size}</p>
                <Link to="/cart"><button id={id} className="addToCartBtn" onClick={() => addToCart(item)}>+</button></Link>
            </div>
        </div>
    );
};
export default PerfumeSite;