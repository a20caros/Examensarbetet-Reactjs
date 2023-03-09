import React, { useContext } from "react";
import '../CSS/ProductStyle.css';
import { shopContext } from "./Perfume";

export const PerfumeSite = (index) => {
    const { getProductName, getproductPrice, getProductSize, getProductSmell, getProdutImg} = useContext(shopContext);
    const random_string = getProductName();
    const productPrice = getproductPrice();
    const productSize = getProductSize();
    const productSmell = getProductSmell();
    const productImg = getProdutImg();

    return (
        <div className="productFloat">
            <div className="fullContainer">
                <div className="perfumeContainer" key={index}>
                    <img src={productImg}/>
                    <p><b>{random_string}</b></p>
                    <p>{productPrice} kr</p>
                    <p>Doft av {productSmell}</p>
                    <p>{productSize * 10} ml</p>
                </div>
            </div>
        </div>  
    )
}
export default PerfumeSite;