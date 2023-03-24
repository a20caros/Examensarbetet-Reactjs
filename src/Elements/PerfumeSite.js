import React from "react";
import '../CSS/ProductStyle.css';

const PerfumeSite = ({item, addToCart})=> {
    const {name, smell, size, price, img} = item;

   return  (     
        <div className='fullContainer'>
            <div className="perfumeContainer">
                <img src={img}/>
                <p><b>{name}</b></p>
                <p>{price +' kr'}</p>
                <p>{smell}</p>
                <p>{size}</p>
                <button id="addToCartBtn" onClick={() => addToCart(item)}>+</button>
            </div>
        </div>
    );
};
export default PerfumeSite;