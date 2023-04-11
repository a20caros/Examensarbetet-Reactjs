import React from "react";
import '../CSS/ProductStyle.css'; 
import ShopMenPerfume from "./shopMenPerfume";
import mProduct from 'file:///C:/Users/carol/OneDrive/Skrivbord/files/menProduct.json';

const WriteProductsMen=({addToCart})=>{
    const menproductsString = JSON.stringify(mProduct);
  localStorage.setItem("myMenProducts", menproductsString);
    return (
        <div className="productFloat">
           {" "}
            {/*Loops through the menProduct array and sends it to the men Persume component*/}
            {mProduct.map((item) => (
            <ShopMenPerfume key={item.id} item={item} addToCart={addToCart}/>
            ))}
         </div>
      
    )
};
export default WriteProductsMen;