import React from 'react'
import '../css/navbar.css'


const NavigaionBar = () => {
  return (
    <>
        <div className="navbar--main">

<div className="navbar--main-header">
    <h1>e-commerce</h1>
</div>
<div className="navbar--main-div-search">
    <input className="navbar--main-search" type="text" placeholder="Search for products or brands"/>
</div>
<div className="navbar--main-signin-shoppingbag">
    <p className="navbar--main-signin-item"><a style={{color: 'black', textDecoration: 'none'}} href="google.com">Sign in</a> <i className="navbar--main-signin-icon fa-solid fa-angle-down"></i></p>
    <i className="navbar--main-shoppingbag-item fa-solid fa-xl fa-bag-shopping"></i>
</div>
</div>

<div className="line"></div>

<div className="navbar">
<ul className="navbar--ul">
    <li className="navbar-li-items"><i style={{color:'red'}} className="fa-solid fa-gift"></i><a style={{marginLeft: 5, color:"red"}} className="navbar--a-items" href="google.comoogle.com">Holiday Gifts</a></li>
    <li className="navbar-li-items"><a style={{color:'red'}} className="navbar--a-items" href="google.comoogle.com">Sale</a></li>
    <li className="navbar-li-items"><a className="navbar--a-items" href="google.com">Women</a></li>
    <li className="navbar-li-items"><a className="navbar--a-items" href="google.com">Men</a></li>
    <li className="navbar-li-items"><a className="navbar--a-items" href="google.com">Kids</a></li>
    <li className="navbar-li-items"><a className="navbar--a-items" href="google.com">Young Adults</a></li>
    <li className="navbar-li-items"><a className="navbar--a-items" href="google.com">Activewear</a></li>
    <li className="navbar-li-items"><a className="navbar--a-items" href="google.com">Home</a></li>
    <li className="navbar-li-items"><a className="navbar--a-items" href="google.com">Beauty</a></li>
    <li className="navbar-li-items"><a className="navbar--a-items" href="google.com">Designer</a></li>
    <li className="navbar-li-items"><a className="navbar--a-items" href="google.com">Gift</a></li>
    <li className="navbar-li-items"><a className="navbar--a-items" href="google.com">Threads</a></li>
</ul>
</div>

    </>
  )
}

export default NavigaionBar
