import {createContext} from 'react';
export const shopContext = createContext(null); 


 
    function getMenPerfumesFromLocalStorage(){
        const jsonMenPerfume = localStorage.getItem('menProductssss');
        return JSON.parse(jsonMenPerfume);
    }
   
    const menProduct = getMenPerfumesFromLocalStorage();

export default menProduct;
   
    


