import React from 'react'
import '../css/container.css'
import woman from '../img/woman.jpg';
import man from '../img/man.jpg';
import kid from '../img/kid.jpg';
import teen from '../img/teen.jpg';
import beautyfragrance from '../img/BeautyFragrance.jpg';
import fallcollection from '../img/fallcollection.jpg';
import home from '../img/home.jpg';
import hispanicheritage from '../img/hispanicheritage.jpg';
import heritage_1 from '../img/heritage-1.jpg';
import heritage_2 from '../img/heritage-2.jpg';


const Section2 = () => {
  return (
    <>

<div className="container--header">SHOP BY CATEGORY</div>
        <div className="container--two">
            <div className="container--second--div"><img style={{width: 250, height:350}} src={woman} alt='by Rafaella Mendes Diniz'/><h1 className="container-second-textitem">Women</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={man} alt='by DRAKEs TAKES'/><h1 className="container-second-textitem">Men</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={kid} alt='by Taylor Smith'/><h1 className="container-second-textitem">Kids</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={teen} alt='by Laura Chouette'/> <h1 className="container-second-textitem">Teens</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={beautyfragrance} alt='Laura Chouette'/> <h1 className="container-second-textitem">Beauty & Fragrance</h1></div>
        </div>

    </>
  )
}

export default Section2
