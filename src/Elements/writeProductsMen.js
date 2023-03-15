import React from "react";
import products  from "./Perfume";
import '../CSS/ProductStyle.css'; 
import {ShopMenPerfume} from "./shopMenPerfume";

export const WriteProductsMen=()=>{
 
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