import React from 'react'
import '../css/bannercreditcard.css';
import creditcardBanner from'../img/BannerCreditCard.png';


const BannerCreditCard = () => {
  return (
    <div className='banner--creditcard--container'>
        <div className="banner--creditcard--content">
            <div className='banner--creditcard--content--child'>
                 <h1 className='banner--creditcard--content--header'>Get $40 Bucks off your next Purchase.</h1>
                 <p className='banner--creditcard--content--text'>An exclusive offer for new Nordstrom credit cardmembers. Restrictions apply.</p>
                <button className='banner--creditcard--content--button'>Apply Now!</button>
            </div>  
        </div>
            <img src={creditcardBanner} alt=''></img>
    </div>
  )
}

export default BannerCreditCard
