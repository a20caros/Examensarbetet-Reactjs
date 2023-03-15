import React, { useContext} from "react";
import '../CSS/ProductStyle.css';
import { useCart } from 'react-use-cart';

export const PerfumeSite = (props) => {
    //const {id,name, smell, size, price, img} = props.data;
    const {addItem} = useCart();
  
      
   return  (     
        <div className='fullContainer'>
            <div className="perfumeContainer">
                <img src={props.img}/>
                <p><b>{props.name}</b></p>
                <p>{props.price}</p>
                <p>{props.smell}</p>
                <p>{props.size}</p>
                <button id="addToCartBtn" onClick={() => addItem(props.item)}>Lägg i varukorgen</button>
                
            </div>
        </div>
        
    );
   
}  
export default PerfumeSite;