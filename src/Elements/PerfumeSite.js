import React from "react";
import '../CSS/ProductStyle.css';
import { Link } from "react-router-dom";
const PerfumeSite = ({item, addToCart})=> {
    //Used to assign variables from the item item with its properties
    const {name, smell, size, price, img, id} = item;
   
         
   return  (    
        <div className='fullContainer'>
             {/*Prints the products for women*/}
            <div className="perfumeContainer">
                <img src={img}/>
                <p><b>{name}</b></p>
                <p>{price +' kr'}</p>
                <p>{smell}</p>
                <p>{size}</p>
                {/*Button/link to add the product to the shopping cart*/}
                <Link to="/cart" className="linkAddToCart" id={id} onClick={() => addToCart(item)}>+</Link>
            </div>
        </div>
    );
};
export default PerfumeSite;