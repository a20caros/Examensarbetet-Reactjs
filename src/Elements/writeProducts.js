import React from "react";
import allProducts  from "./Perfume";
import '../CSS/ProductStyle.css'; 
import {PerfumeSite} from "./perfumeSite";

export const WriteProducts=()=>{
    const products = JSON.parse(allProducts);
    return (
        <div className="productFloat">
           {" "}
            {products.map((PRODUCT) => (
            <PerfumeSite data={PRODUCT}/>
            ))}
         </div>
      
    )
}
export default WriteProducts;