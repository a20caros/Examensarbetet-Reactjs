import React from "react";
import '../CSS/ProductStyle.css';


export const ShopMenPerfume = (props) => {
    //const {menName, smellMen, menSize, menPrice, imgMen, idMen} = props.data;
    //const { addCart } = useContext(shopContext); 

    
   return  (     
        <div className='fullContainer'>
            <div className="perfumeContainer">
                <img src={props.imgMen}/>
                <p><b>{props.menName}</b></p>
                <p>{props.menPrice}</p>
                <p>{props.smellMen}</p>
                <p>{props.menSize}</p>
                <button id="addToCartBtn" >Lägg i varukorgen</button>
            </div>
        </div>
        
    );
   
}  
export default ShopMenPerfume;