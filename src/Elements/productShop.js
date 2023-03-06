import React from "react";
import { PRODUCT } from "./Perfume";
import {PerfumeSite} from "./PerfumeSite";
import '../CSS/ProductStyle.css';

export const ProductShop=()=>{
    return (
        //Prints the products from the perfume site element that contains all the data
        <div className="productFloat">
            {" "}
            {PRODUCT.map((PRODUCT) => (
                <PerfumeSite data={PRODUCT}/>
            ))}
        </div>
    )
}
export default ProductShop;