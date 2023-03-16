import React, {useState} from "react";
import product from "./Perfume";
import '../CSS/ProductStyle.css'; 
import PerfumeSite from "./PerfumeSite";


const WriteProducts=({addToCart})=>{
    return (
        <div className="productFloat">
           {" "}
            {product.map((item) => (
              <PerfumeSite key={item.id} item={item} addToCart={addToCart} />
            ))}
         </div>
      
    )
};
export default WriteProducts;