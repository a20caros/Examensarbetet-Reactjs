import React from "react";
import '../CSS/FooterStyle.css';
import { BsInstagram, BsFacebook,BsYoutube,BsTiktok } from "react-icons/bs";


const Footer =()=> {
    return(
        <>
        <div className="mainFooter">
        <div className='logoType'>
            <h2>INNOVIA<br></br></h2>
            <h4>Naturally Fresh perfume</h4>
        </div>
            <ol className="socialMedia">
                <li><BsInstagram size={20}/> Instagram</li>
                <li><BsFacebook size={20}/> Facebook</li>
                <li><BsYoutube size={20}/> Youtube</li>
                <li><BsTiktok size={20}/> Tiktok</li>
            </ol>
        </div>

        </>
    )
}

export default Footer;