import React from "react";
import menProduct  from "./menPerfume";
import '../CSS/ProductStyle.css'; 
import ShopMenPerfume from "./shopMenPerfume";

const WriteProductsMen=({addToCart})=>{
    return (
        <div className="productFloat">
           {" "}
            {menProduct.map((item) => (
            <ShopMenPerfume key={item.id} item={item} addToCart={addToCart}/>
            ))}
         </div>
      
    )
};
export default WriteProductsMen;