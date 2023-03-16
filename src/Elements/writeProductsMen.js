import React from "react";
import menProduct  from "./menPerfume";
import '../CSS/ProductStyle.css'; 
import {ShopMenPerfume} from "./shopMenPerfume";

export const WriteProductsMen=()=>{
 
    return (
        <div className="productFloat">
           {" "}
            {menProduct.map((item, index) => (
            <ShopMenPerfume imgMen={item.imgMen} menName={item.menName} menPrice={item.menPrice} menSmell={item.menSmell} menSize={item.menSize} item={item} key={index} id={item.id}/>
            ))}
         </div>
      
    )
}
export default WriteProductsMen;