import flowerPerfume from './pexels-darina-belonogova-8789609.jpg';
import bluePerfume from './pexels-daria-liudnaya-8166566.jpg';
import sandPerfume from './pexels-karolina-grabowska-8361478.jpg';
import greenPerfume from './pexels-karolina-grabowska-8361487.jpg';
import orangePerfume from './pexels-daria-liudnaya-8166972.jpg';
import silkesPerfume from './pexels-hanna-auramenka-8553210.jpg';
import orangeFlowerPerfume from './pexels-dids-1190829.jpg';
import purpleFlowerPerfume from './pexels-daria-liudnaya-8166613.jpg';
import React, {createContext} from 'react';

export const shopContext = createContext(null); 

    function getProductName() {
        var productHeading='';
        const character = "ABCDEFGHIJKLMNOPRSTUV";
        for(var i, i = 0; i < 6; i++){
            productHeading += character.charAt(Math.floor(Math.random()* character.length));
        }
        return productHeading;
      
    }
    function getproductPrice() {
        const maxPrice = 1000;
        const minPrice = 100;
        const productPrice = minPrice + (Math.floor(Math.random() * (maxPrice-minPrice)));
        return productPrice + ' kr';
    }
    function getProductSize() {
        const maxSize = 3;
        const minSize = 10;
        const productSize = minSize + (Math.floor(Math.random() * (maxSize-minSize)));
        return productSize + ' ml';
    }

    function getProductSmell(){
        const smellArray =['vanilj','rosor','citrusfrukter','mandel','päron','äpple'];
        const productSmell = smellArray[(Math.random() * smellArray.length) | 0]
        return 'Doft av ' + productSmell;
    }
    function getProdutImg(){
        const productImgArray = [flowerPerfume, bluePerfume, sandPerfume, greenPerfume, orangePerfume, silkesPerfume, orangeFlowerPerfume, purpleFlowerPerfume];
        const productImg = productImgArray[(Math.random()*productImgArray.length) | 0];
        return productImg;
    }
    function generateProductId() {
        const id = Math.floor(Math.random() * 100 +1); 
        return id.toString();
      }
    function generatePerfumes(){
        const productArray = [];
        for (let i = 0; i < 10; i++) {
            const PRODUCT = {
                id: generateProductId(),
                name: getProductName(),
                price: getproductPrice(),
                size: getProductSize(),
                smell: getProductSmell(),
                img: getProdutImg(),
            };
            productArray.push(PRODUCT);
        }
        return productArray;
    }
    function savePerfumesToLocalStorage(){
        const products = generatePerfumes();
        const jsonPerfumes =JSON.stringify(products);
        localStorage.setItem('products', jsonPerfumes);
    }
    function getPerfumesFromLocalStorage(){
        const jsonPerfumes = localStorage.getItem('products');
        return JSON.parse(jsonPerfumes);
    }
    if (!localStorage.getItem('products')){
        savePerfumesToLocalStorage();
    }
    const product = getPerfumesFromLocalStorage();
    

export default product;
   
    


