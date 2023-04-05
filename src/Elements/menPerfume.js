import {createContext} from 'react';
export const shopContext = createContext(null); 


  //Get the men products from localstorage
    function getMenPerfumesFromLocalStorage(){
        const jsonMenPerfume = localStorage.getItem('menProductssss');
        return JSON.parse(jsonMenPerfume);
    }
   
    const menProduct = getMenPerfumesFromLocalStorage();

export default menProduct;
   
    


