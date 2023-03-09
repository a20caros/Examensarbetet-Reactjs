import React from "react";
import '../CSS/ProductStyle.css';
import { shopContext } from "./Perfume";
import PerfumeSite from "./PerfumeSite";

export const ProductShop=()=>{
    return (
        //Prints the products from the perfume site element that contains all the data
        <div className="productFloat">
            <PerfumeSite data={shopContext}/>
        </div>
    )
}
export default ProductShop;