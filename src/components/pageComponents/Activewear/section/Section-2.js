import React from 'react'
import '../css/section.css'
import tops from '../img/tops.jpg';
import bottoms from '../img/bottoms.jpg';
import shoes from '../img/shoes.jpg';
import accessories from '../img/accessories.jpg';


const Section2 = () => {
  return (
    <>
    <div className="section--header">Women's Wear</div>
        <div className="container--two">
            <div className="container--second--div"><img style={{width: 250, height:350}} src={tops} alt='by hayley-kim'/><h1 className="container-second-textitem">Tops</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={bottoms} alt='by tyler nix'/><h1 className="container-second-textitem">Bottoms</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={shoes} alt='by emre-karatas'/><h1 className="container-second-textitem">Sneakers</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={accessories} alt='by heather-ford'/> <h1 className="container-second-textitem">Accessories</h1></div>
        </div>

    </>
  )
}

export default Section2
