import React from 'react'
import '../css/container.css'
import woman from '../img/woman.jpg';
import man from '../img/man.jpg';
import kid from '../img/kid.jpg';
import teen from '../img/teen.jpg';
import beautyfragrance from '../img/BeautyFragrance.jpg';


const container = () => {
  return (
    <>
         <div className="container">
        <div className="container--div">one</div>
        <div className="container--main-div">
            <div className="container--div-nested">
                <div className="container-div-nested-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis doloribus cumque tempora velit fuga qui odio odit magnam quaerat voluptatem et, quibusdam facere, veniam expedita laborum voluptas debitis! Ad, nesciunt.</p>
                </div>
                <div className="container-div-nested-image"></div>
            </div>
        </div>
        <div className="container--div">three</div>
    </div>

        <div className="container--two-header">SHOP BY CATEGORY</div>
        <div className="container--two">
            <div className="container--second--div"><img style={{width: 250, height:350}} src={woman} alt=''/><h1 className="container-second-textitem">Women</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={man} alt=''/><h1 className="container-second-textitem">Men</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={kid} alt=''/><h1 className="container-second-textitem">Kids</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={teen} alt=''/> <h1 className="container-second-textitem">Teens</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={beautyfragrance} alt=''/> <h1 className="container-second-textitem">Beauty & Fragrance</h1></div>
        </div>
    

        
    <div className="container">
        <div className="container--third--div">one</div>
        <div className="container--third--div">two</div>
        <div className="container--third--div">three</div>
    </div>

    <div className="container">
        <div className="container--fourth--div">one</div>
        <div className="container--fourth--div">two</div>
        <div className="container--fourth--div">three</div>
    </div>

    </>
  )
}

export default container
