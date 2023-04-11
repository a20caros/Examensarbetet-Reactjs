import React from "react";
import '../CSS/ProductStyle.css'; 
import PerfumeSite from "./PerfumeSite";
import products from 'file:///C:/Users/carol/OneDrive/Skrivbord/files/womenProduct.json';

const WriteProducts=({addToCart})=>{
  const productsString = JSON.stringify(products);
  localStorage.setItem("myProducts", productsString);
    return (
        <div className="productFloat">
           {" "}
           {/*Loops through the products array and sends it to the women Perfumessite*/}
            {products.map((item) => (
              <PerfumeSite key={item.id} item={item} addToCart={addToCart} />
            ))}
         </div>
      
    )
};
export default WriteProducts;