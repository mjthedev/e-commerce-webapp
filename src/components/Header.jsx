import React from 'react'
import { Link } from 'react-router-dom'
import '../css/header.css'


const Header = () => {
  return (
    <>

    <div className="header--signin-createacc">
        <div className="header--signin-createacc-content">
            <p>Shop what you love-faster and easier.</p>
        </div>
        <div className="header--signin-createacc-button">
        <Link to={"/SignIn"} ><button className="header--signin-createacc-button-item" style={{width: 220, height: 30}}>Sign in or Create an Account</button></Link>
        </div>
    </div>
    </>
  )
}

export default Header
