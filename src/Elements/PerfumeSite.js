import React, { useContext} from "react";
import '../CSS/ProductStyle.css';
import { shopContext } from "./Perfume";

export const PerfumeSite = () => {
    const { getProductName, getproductPrice, getProductSize, getProductSmell, getProdutImg} = useContext(shopContext);
    //The array created from the functions on the perfume page
    const productArray = [];

    //The number of products chosen to be displayed
    const productAmount = 20;
    const newProductArray = []; 
    //The number of elements in the array that should belong to a product
    const productGroupSize = 5; 

    //a for loop that pushes data from the functions on the perfume page to the productArray and prints the number of products to be displayed on the page
    for (let i = 0; i < productAmount; i++) {
        const productHeading = getProductName();
        const productPrice = getproductPrice();
        const productSize = getProductSize();
        const productSmell = getProductSmell();
        const productImg = getProdutImg();
        
        productArray.push(productImg, productHeading, productPrice, productSmell, productSize);
    }
      
    //A for loop that takes five elements from the array and divides it from the rest of the array to belong to a product
    for (let i = 0; i < productArray.length; i += productGroupSize) {
    const productGroup = productArray.slice(i, i + productGroupSize);
    newProductArray.push(productGroup);
    }
    //All products in the array executes
   return  (
        <div className="perfumeContainer">
            <div className="productFloat">
                {newProductArray.map((productGroup, index) => (
                <div className="fullContainer" key={index}>
                    {productGroup.map((item, index) => (
                        <span>
                            {index == 0 && <img src={item}/>}
                            {index == 1 && <h3>{item}</h3>}
                            {index == 2 && <p>{item}</p>}
                            {index == 3 && <p>{item}</p>}
                            {index == 4 && <p>{item}</p>}
                        </span>
                    ))} 
                </div>
                ))}
            </div>
        </div>  
    );
     
}  
export default PerfumeSite;