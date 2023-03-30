import React from "react";
import products from "./Perfume";
import '../CSS/ProductStyle.css'; 
import PerfumeSite from "./PerfumeSite";


const WriteProducts=({addToCart})=>{
    return (
        <div className="productFloat">
           {" "}
            {products.map((item) => (
              <PerfumeSite key={item.id} item={item} addToCart={addToCart} />
            ))}
         </div>
      
    )
};
export default WriteProducts;