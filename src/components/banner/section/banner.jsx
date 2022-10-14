import React from 'react'
import BannerX from '../img/BannerX.png';
import '../css/bannerx.css';


const Banner = () => {
  return (
    <div className='banner-container'>
        <div className="bannerx-content">
            <div className='bannerx-content-child'>
                 <h1 className='bannerx-content-header'>Get Lost In Yourself!</h1>
                 <p className='bannerx-content-text'>Reveal New Finds In Our Forest Collection.</p>
                <button className='bannerx-content-button'>Shop Now</button>
            </div>  
        </div>
            <img className='bannerx-img' src={BannerX} alt=''></img>
    </div>
  )
}

export default Banner
