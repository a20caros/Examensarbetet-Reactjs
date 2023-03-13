import flowerPerfume from './pexels-irina-demyanovskikh-9944432.jpg';
import bluePerfume from './pexels-daria-liudnaya-8166566.jpg';
import sandPerfume from './pexels-karolina-grabowska-8361478.jpg';
import greenPerfume from './pexels-karolina-grabowska-8361487.jpg';
import orangePerfume from './pexels-daria-liudnaya-8166972.jpg';
import silkesPerfume from './pexels-hanna-auramenka-8553210.jpg';
import orangeFlowerPerfume from './pexels-dids-1190829.jpg';
import purpleFlowerPerfume from './pexels-daria-liudnaya-8166613.jpg';
import React, {createContext} from 'react';

export const shopContext = createContext(null); 

export const ShopContextProvider = (props) => {
    const getProductName = () => {
        var random_string='';
        const character = "ABCDEFGHIJKLMNOPRSTUV";
        for(var i, i = 0; i < 6; i++){
            random_string += character.charAt(Math.floor(Math.random()* character.length));
        }
        return random_string;
      
    }
    const getproductPrice = () =>{
        const maxPrice = 1000;
        const minPrice = 100;
        const productPrice = minPrice + (Math.floor(Math.random() * (maxPrice-minPrice)));
        return productPrice + ' kr';
    }
    const getProductSize = () => {
        const maxSize = 3;
        const minSize = 10;
        const productSize = minSize + (Math.floor(Math.random() * (maxSize-minSize)));
        return productSize + ' ml';
    }

    const getProductSmell = () => {
        const smellArray =['vanilj','rosor','citrusfrukter','mandel','päron','äpple'];
        const productSmell = smellArray[(Math.random() * smellArray.length) | 0]
        return 'Doft av ' + productSmell;
    }
    const getProdutImg = () => {
        const productImgArray = [flowerPerfume, bluePerfume, sandPerfume, greenPerfume, orangePerfume, silkesPerfume, orangeFlowerPerfume, purpleFlowerPerfume];
        const productImg = productImgArray[(Math.random()*productImgArray.length) | 0];
        return productImg;
    }

    const productContext ={getProductName, getproductPrice, getProductSize, getProductSmell, getProdutImg};
   
    return (
        <shopContext.Provider value={productContext}>{props.children}</shopContext.Provider>
    );
};
export default ShopContextProvider;

