import React, { useContext} from "react";
import '../CSS/ProductStyle.css';


export const ShopMenPerfume = (props) => {
    const {name, smellMen, size, price, imgMen, idMen} = props.data;
    //const { addCart } = useContext(shopContext); 

    
   return  (     
        <div className='fullContainer'>
            <div className="perfumeContainer">
                <img src={imgMen}/>
                <p><b>{name}</b></p>
                <p>{price}</p>
                <p>{smellMen}</p>
                <p>{size}</p>
                <p>{idMen}</p>
                <button id="addToCartBtn" >Lägg i varukorgen</button>
            </div>
        </div>
        
    );
   
}  
export default ShopMenPerfume;