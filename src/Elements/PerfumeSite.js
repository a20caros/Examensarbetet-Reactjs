import React from "react";
import '../CSS/ProductStyle.css';

export const PerfumeSite = (props) => {
    const {id, parfymeName, smell, size, price, parfymeImg} = props.data;
    return (
        <div className="fullContainer">
            <div className="perfumeContainer">
                <img src={parfymeImg}/>
                <p><b>{parfymeName}</b></p>
                <p>{price} kr</p>
                <p>{smell}</p>
                <p>{size}</p>
            </div>
        </div>
    )
}
export default PerfumeSite;