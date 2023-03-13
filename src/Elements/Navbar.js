import React from 'react';
import '../CSS/NavbarStyle.css'; 
import {NavLink} from 'react-router-dom';
import {MdShoppingCart} from "react-icons/md";



const Navbar=()=>{
    return(
        <>
        <div className='container container-flex'>
            <nav>
                <div className='list'>
                    <NavLink className="navbarList" to="/">Hem</NavLink>
                    <NavLink to="/perfumeSite">Dam Parfymer</NavLink>
                    <NavLink to="/shopMenPerfume">Herr Parfymer</NavLink>
                    <NavLink to="/cart">
                        <MdShoppingCart className="cartFig" size={30}/>
                    </NavLink>
                </div>
                <div className='loggoType'>
                    <h2>INNOVIA<br></br></h2>
                    <h4>Naturally Fresh perfume</h4>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navbar;