import React from 'react'
import '../css/navbar.css'
import {
    Link
} from 'react-router-dom'




const NavigationBar = () => {
  return (
<>
        <div className="navbar--main">

<div className="navbar--main-header">
    <Link className="navbar--main-header-style" to={"/"}>e-commerce</Link>
</div>
<div className="navbar--main-div-search">
    <input className="navbar--main-search" type="text" placeholder="Search for products or brands"/>
</div>
<div className="navbar--main-signin-shoppingbag">
    <p className="navbar--main-signin-item"><a style={{color: 'black', textDecoration: 'none'}} href="fdasffasdf">Sign in</a> <i className="navbar--main-signin-icon fa-solid fa-angle-down"></i></p>
    <i className="navbar--main-shoppingbag-item fa-solid fa-xl fa-bag-shopping"></i>
</div>
</div>

<div className="line"></div>

<div className="navbar">
<ul className="navbar--ul">
    <li className="navbar-li-items"><Link className='navbar--a-items' to={"/HolidayGifts"}> Holiday Gifts </Link> </li>
    <li className="navbar-li-items"><Link className='navbar--a-items' style={{color: 'red'}} to={"/Sale"}>Sale </Link></li>
    <li className="navbar-li-items"><Link className='navbar--a-items' to={"/Women"}>Women</Link></li>
    <li className="navbar-li-items"><Link className='navbar--a-items' to={"/Men"}>Men</Link></li>
    <li className="navbar-li-items"><Link className='navbar--a-items' to={"/Kids"}>Kids</Link></li>
    <li className="navbar-li-items"><Link className='navbar--a-items' to={"/YoungAdults"}>YoungAdults</Link></li>
    <li className="navbar-li-items"><Link className='navbar--a-items' to={"/Activewear"}>Activewear</Link></li>
    <li className="navbar-li-items"><Link className='navbar--a-items' to={"/Home"}>Home</Link></li>
    <li className="navbar-li-items"><Link className='navbar--a-items' to={"/Beauty"}>Beauty</Link></li>
    <li className="navbar-li-items"><Link className='navbar--a-items' to={"/Designer"}>Designer</Link></li>
    <li className="navbar-li-items"><Link className='navbar--a-items' to={"/Gift"}>Gift</Link></li>
    <li className="navbar-li-items"><Link className='navbar--a-items' to={"/Threads"}>Threads</Link></li>
</ul>        
    </div>
    </>
  )
}

export default NavigationBar
