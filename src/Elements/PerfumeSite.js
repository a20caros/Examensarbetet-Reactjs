import React, { useContext} from "react";
import '../CSS/ProductStyle.css';

export const PerfumeSite = (props) => {
    const {name, smell, size, price, img} = props.data;
   
    console.log(props.productName);
    
   return  (     
        <div className='fullContainer'>
            <div className="perfumeContainer">
                <img src={img}/>
                <p><b>{name}</b></p>
                <p>{price}kr</p>
                <p>{smell}</p>
                <p>{size}</p>
                <button id="addToCartBtn" >Lägg i varukorgen</button>
            </div>
        </div>
        
    );
   
}  
export default PerfumeSite;