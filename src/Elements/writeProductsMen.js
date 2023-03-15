import React from "react";
import allProducts  from "./Perfume";
import '../CSS/ProductStyle.css'; 
import {ShopMenPerfume} from "./shopMenPerfume";

export const WriteProductsMen=()=>{
    const products = JSON.parse(allProducts);
    return (
        <div className="productFloat">
           {" "}
            {products.map((PRODUCT) => (
            <ShopMenPerfume data={PRODUCT}/>
            ))}
         </div>
      
    )
}
export default WriteProductsMen;