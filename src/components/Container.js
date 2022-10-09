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


const container = () => {
  return (
    <>
         <div className="container">
        <div className="container--div"></div>
        <div className="container--main-div">
            <div className="container--div-nested">
                <div className="container-div-nested-content">
                    <p>Checkout Our Latest Fall Collection</p>
                </div>
                <div className="container-div-nested-image"><img src={fallcollection} style={{width: 400, height: 500}} alt='Caleb Jones'></img></div>
            </div>
        </div>
        <div className="container--div"></div>
    </div>

        <div className="container--header">SHOP BY CATEGORY</div>
        <div className="container--two">
            <div className="container--second--div"><img style={{width: 250, height:350}} src={woman} alt='by Rafaella Mendes Diniz'/><h1 className="container-second-textitem">Women</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={man} alt='by DRAKEs TAKES'/><h1 className="container-second-textitem">Men</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={kid} alt='by Taylor Smith'/><h1 className="container-second-textitem">Kids</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={teen} alt='by Laura Chouette'/> <h1 className="container-second-textitem">Teens</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={beautyfragrance} alt='Laura Chouette'/> <h1 className="container-second-textitem">Beauty & Fragrance</h1></div>
        </div>
    

    <div className="container--header">PRIORITIZE YOUR DOMAIN</div>
    <div className="container">
        <div className="container--thirddiv--child"></div>
        <div className="container--thirddiv--child">
            <div className='container--thirddiv-grandchild-1'><img src={home} style={{width: 400, height: 575}} alt="Brina Blum"></img></div>
            <div className='container--thirddiv-grandchild-2'><p>Design Your Home One Nap at a Time</p></div>
        </div>
        <div className="container--thirddiv--child"></div>
    </div>

    <div className="container--header">MAKING TIME FOR WHAT MATTERS</div>

    <div className="container--fourth">
        <div className="container--fourthdiv--child--1">

            <div className="container--fourthdiv--content">1</div>

                <div className="container--fourthdiv--grandchild">
                    <div className="fourthdiv--greatgrand">1</div>
                    <div className="fourthdiv--greatgrand">2</div>
                </div>

            <div className="container--fourthdiv--content">1</div>
            
        </div>

        <div className="container--fourthdiv--child--2">
            <img src={hispanicheritage} style={{width: 675, height: 450}} alt="Brina Blum"></img> 
            <div>text</div>
        </div>
        
    </div>

    </>
  )
}

export default container
