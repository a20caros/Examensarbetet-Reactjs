import {createContext} from 'react';

export const shopContext = createContext(null); 

    //Get the women products from localstorage
    function getPerfumesFromLocalStorage(){
        const jsonPerfumes = localStorage.getItem('producttttttt');
        return JSON.parse(jsonPerfumes);
    }
   
    const product = getPerfumesFromLocalStorage();
export default product;
   
    


