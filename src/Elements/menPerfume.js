import orangeMenPerfume from './pexels-darina-belonogova-8789599.jpg';
import darkOrangePerfume from './pexels-rfstudio-3059609.jpg';
import blackPerfume from './pexels-darina-belonogova-8789609.jpg';
import greenCapPerfume from './pexels-dina-nasyrova-3831748.jpg';
import goldPerfume from './pexels-syed-nouman-7400855.jpg';
import darkBluePerfume from './pexels-jonathan-cooper-15190739.jpg';
import darkGoldPerfume from './pexels-yogesh-jangid-7702669.jpg';
import {createContext} from 'react';
export const shopContext = createContext(null); 

    function getMenProductName() {
        var productMenHeading='';
        const character = "ABCDEFGHIJKLMNOPRSTUV";
        for(var i, i = 0; i < 6; i++){
            productMenHeading += character.charAt(Math.floor(Math.random()* character.length));
        }
        return productMenHeading;
      
    }
    function getMenProductPrice() {
        const maxPrice = 1000;
        const minPrice = 100;
        const menProductPrice = minPrice + (Math.floor(Math.random() * (maxPrice-minPrice)));
        return menProductPrice;
    }
    function getMenProductSize() {
        const maxSize = 3;
        const minSize = 10;
        const menProductSize = minSize + (Math.floor(Math.random() * (maxSize-minSize)));
        return menProductSize + ' ml';
    }

    function getMenProductSmell(){
        const menSmellArray =['kastanj','lavensel','mynta','salvia','ceder','violblad'];
        const menProductSmell = menSmellArray[(Math.random() * menSmellArray.length) | 0]
        return 'Doft av ' + menProductSmell;
    }
    function getMenProdutImg() {
        const menProductImgArray = [darkOrangePerfume, orangeMenPerfume, blackPerfume, greenCapPerfume, goldPerfume, darkBluePerfume, darkGoldPerfume];
        const menProductImg = menProductImgArray[(Math.random()*menProductImgArray.length) | 0];
        return menProductImg;
    }
      function generateMenProductId() {
        const time = Date.now().toString(36); 
        const randomCharacters = Math.random().toString(36).substring(2, 8); 
        return time + "-" + randomCharacters;
      }
    function generateMenPerfumes(){
        const menProductArray = [];
        for (let i = 0; i < 10; i++) {
            const PRODUCTS = {
                id:generateMenProductId(),
                name: getMenProductName(),
                price: getMenProductPrice(),
                size: getMenProductSize(),
                smell: getMenProductSmell(),
                img: getMenProdutImg(),
            };
            menProductArray.push(PRODUCTS);
        }
        return menProductArray;
    }
    function saveMenPerfumesToLocalStorage(){
        const menProducts = generateMenPerfumes();
        const jsonMenPerfumes =JSON.stringify(menProducts);
        localStorage.setItem('menProducts', jsonMenPerfumes);
    }
    function getMenPerfumesFromLocalStorage(){
        const jsonMenPerfumes = localStorage.getItem('menProducts');
        return JSON.parse(jsonMenPerfumes);
    }
    if (!localStorage.getItem('menProducts')){
        saveMenPerfumesToLocalStorage();
    }
    const menProduct = getMenPerfumesFromLocalStorage();
    localStorage.clear();

export default menProduct;
   
    


