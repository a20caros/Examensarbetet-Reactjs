import React from "react";
import '../CSS/ProductStyle.css';

const PerfumeSite = ({item, addToCart})=> {
    const {name, smell, size, price, img} = item;

   return  (     
        <div className='fullContainer'>
            <div className="perfumeContainer">
                <img src={img}/>
                <p><b>{name}</b></p>
                <p>{price}</p>
                <p>{smell}</p>
                <p>{size}</p>
                <button id="addToCartBtn" onClick={() => addToCart(item)}>Lägg i varukorgen</button>
            </div>
        </div>
    );
};
export default PerfumeSite;