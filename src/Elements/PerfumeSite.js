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
                <Link to="/cart" className="linkAddToCart" id={id} onClick={() => addToCart(item)}>+</Link>
            </div>
        </div>
    );
};
export default PerfumeSite;