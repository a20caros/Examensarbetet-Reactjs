import React, {useContext} from "react";
import product  from "./Perfume";
import '../CSS/ProductStyle.css'; 
import {PerfumeSite} from "./PerfumeSite";



export const WriteProducts=()=>{
  
    return (
        <div className="productFloat">
           {" "}
            {product.map((item, index) => (
              <PerfumeSite img={item.img} name={item.name} price={item.price} smell={item.smell} size={item.size} item={item} key={index} id={item.id}/>
            ))}
         </div>
      
    )
}
export default WriteProducts;