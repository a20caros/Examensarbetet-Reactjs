import React from 'react';
import '../CSS/homeStyle.css';
import parfymeImg from './pexels-cottonbro-studio-4659794.jpg';
import essentialOilImg from './pexels-cottonbro-studio-4659792.jpg';
import parfymeHand from './pexels-artem-podrez-6801188.jpg';
import parfymeFlower from './pexels-ron-lach-10536602.jpg';

const Home=()=>{
    return(
        <>
        <div className='backgroundimg'></div>
        <div className='homePageDiv'>
            <h3>INNOVIA</h3>
            <h5>På INNOVIA hittar du de allra trendigaste parfymerna till det bästa priset. Oavsett vilken parfym som är din favorit har vi den och mycket mycket mer</h5>
        </div>
        <div className='homePageImg'>
            <div className="parfymeImg">
                <img src={parfymeImg} width="300px" height="300px"></img>
            </div>
            <div className="parfymeImg">
                <img src={essentialOilImg} width="300px" height="300px"></img>
            </div>
        </div>
        <img className="handParfyme" src={parfymeHand} width="1000px" height="500px"></img>
        <div className='homePageParfymeDiv'>
            <h1>Make your day to a fresh day</h1>
        </div>
        <img className='parfymeflower' src={parfymeFlower} width='400px' height='500px'></img>
        </>
    )
}
export default Home;