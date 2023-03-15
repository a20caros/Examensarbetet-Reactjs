import flowerPerfume from './pexels-darina-belonogova-8789609.jpg';
import bluePerfume from './pexels-daria-liudnaya-8166566.jpg';
import sandPerfume from './pexels-karolina-grabowska-8361478.jpg';
import greenPerfume from './pexels-karolina-grabowska-8361487.jpg';
import orangePerfume from './pexels-daria-liudnaya-8166972.jpg';
import silkesPerfume from './pexels-hanna-auramenka-8553210.jpg';
import orangeFlowerPerfume from './pexels-dids-1190829.jpg';
import purpleFlowerPerfume from './pexels-daria-liudnaya-8166613.jpg';
import orangeMenPerfume from './pexels-darina-belonogova-8789599.jpg';
import darkOrangePerfume from './pexels-rfstudio-3059609.jpg';
import blackPerfume from './pexels-darina-belonogova-8789609.jpg';
import greenCapPerfume from './pexels-dina-nasyrova-3831748.jpg';
import goldPerfume from './pexels-syed-nouman-7400855.jpg';
import darkBluePerfume from './pexels-jonathan-cooper-15190739.jpg';
import darkGoldPerfume from './pexels-yogesh-jangid-7702669.jpg';
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
    function getMenProductSmell(){
        const menSmellArray =['kastanj','lavensel','mynta','salvia','ceder','violblad'];
        const menProductSmell = menSmellArray[(Math.random() * menSmellArray.length) | 0]
        return 'Doft av ' + menProductSmell;
    }
    function getProdutImg(){
        const productImgArray = [flowerPerfume, bluePerfume, sandPerfume, greenPerfume, orangePerfume, silkesPerfume, orangeFlowerPerfume, purpleFlowerPerfume];
        const productImg = productImgArray[(Math.random()*productImgArray.length) | 0];
        return productImg;
    }
    function getMenProdutImg() {
        const menProductImgArray = [darkOrangePerfume, orangeMenPerfume, blackPerfume, greenCapPerfume, goldPerfume, darkBluePerfume, darkGoldPerfume];
        const menProductImg = menProductImgArray[(Math.random()*menProductImgArray.length) | 0];
        return menProductImg;
    }
    function generateProductId() {
        const id = Math.floor(Math.random() * 10); // Generera ett slumpmässigt heltal mellan 0 och 9
        return id.toString();
      }
    const productArray = [];
      for (let i = 0; i < 10; i++) {
        const PRODUCT = {
            id: generateProductId(),
            name: getProductName(),
            price: getproductPrice(),
            size: getProductSize(),
            smell: getProductSmell(),
            smellMen: getMenProductSmell(),
            img: getProdutImg(),
            imgMen: getMenProdutImg(),
        };
        productArray.push(PRODUCT);
    }
   
    const allProducts = JSON.stringify(productArray);
export default allProducts;
   
    


