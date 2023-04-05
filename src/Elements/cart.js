import React, { useEffect,useRef } from 'react';
import '../CSS/cart.css'; 
import {useState } from 'react'; 

const Cart=({setCartProducts, cartProducts})=>{
    const [cartPrices, setCartPrice] = useState(0); 

    //A function that deletes a specific product from the shopping cart
    const removeProducts = (id) => {
        //Updates the new number of products in the cart after a product has been deleted
        const newAmount = cartProducts.filter((item) => item.id !==id);
        setCartProducts(newAmount);
        //Updates the total price
        totalPrice();
    };
   //A function that calculates the total price of the shopping cart
    const totalPrice = () => {
        //Sets the total price to 0 before anything is added to the cart
        let cartPrice = 0;
        //Loops through all the products in the shopping cart and multiplies it with the number of each product to get a total price
        cartProducts.map(function(cartProduct) {
            cartPrice += cartProduct.price; 
          });
          setCartPrice(cartPrice);
    };
    //Checks if it is the first lap and sets it to true
    const firstRun = useRef(true);
    //Is automatically executed after the component has been rendered and can then control or execute functions to be executed when it is done
    useEffect(() =>{
        //Run the totalprice function to update the price after all the products that should be in the shopping cart are there
        totalPrice();
        //Checks if it is the first time and if cartitem is null
        if (firstRun.current || document.getElementById("cartitems") === null) {
            firstRun.current = false;
            return;
        }
         // Checks if cartiem's ​​id has been printed and then stops time
        if (document.getElementById("cartitems") !== null) {
            const stopTime = Date.now();
            console.log('slut '+ stopTime);
            //Sets the stop time in local storage
            window.localStorage.setItem('stopTime', stopTime);
        }
        
    }, [cartProducts]);
    return(
       <div>
            <h1 id="yourCart">Din Varukorg</h1>
            {/*Loops through the cartItem to display the products added to the cart*/}
            {cartProducts.map((item) =>
            <div className="cartProductIthem" id="cartitems" key={item.id}>
                <img className="cartProductImg" src={item.img} />
                <p><b> {item.name} </b></p>
                <p>{item.price} kr</p>
                <p>{item.smell}</p>
                <p>{item.size}</p>
                <p>Antalet av produkten: {item.quantity}</p>
                {/*A button that deletes a product in the shopping cart*/}
                <button id="removeProduct" onClick={() => removeProducts(item.id)}>X</button>
                </div>
            )}
            {/*Calculates the total price for all products in the shopping cart*/}
            <div className='totalPrice'><h2>Totala priset: {cartPrices} kr</h2></div>
       </div>
    )
};
export default Cart; 