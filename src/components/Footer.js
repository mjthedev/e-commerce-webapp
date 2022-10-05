import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <>

    <div className="footer">
        <div className="footer--div">
            <h1 className="footer--header">Customer Service</h1>
            <ul className="footer--ul">
                <li className="footer--li"><a className="footer--a" href="google.com">Contact Us</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Order Status</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Shipping</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Return PolicyExchanges</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Price Adjustments</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Gift Cards</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">FAQ</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Product Recalls</a></li>
                <li className="footer--li"><i style={{margin: 10}} className="fa-solid fa-flag-usa"></i><a className="footer--a" href="google.com">United States</a></li>
            </ul>
        </div>

        <div className="footer--div">
            <h1 className="footer--header">About Us</h1>
            <ul className="footer--ul">
                <li className="footer--li"><a className="footer--a" href="google.com">Careers</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Corporate Social Responsibility</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Diversity, Inclusion, Beloning</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Get Email Updates</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Nordstrom Blog</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">The Thread</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Nordy Podcast</a></li>
            </ul>
        </div>

        <div className="footer--div">
            <h1 className="footer--header">Stores & Services</h1>
            <ul className="footer--ul">
                <li className="footer--li"><a className="footer--a" href="google.com">Find a Store</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Free Style Help</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Alterations & Tailoring</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Pop-In Shop</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Virtual Events</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Spa Nordstrom</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Nordstrom Resturant</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Norstrom Local</a></li>
            </ul>
        </div>

        <div className="footer--div">
            <h1 className="footer--header">Nordstrom Card</h1>
            <ul className="footer--ul">
                <li className="footer--li"><a className="footer--a" href="google.com">The Nordy Club Rewards</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Apply for Nordstrom Card</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Pay my Bills</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Manage my Nordstrom Card</a></li>
            </ul>
        </div>

        <div className="footer--div">
            <h1 className="footer--header">Nordstrom, Inc.</h1>
            <ul className="footer--ul">
                <li className="footer--li"><a className="footer--a" href="google.com">Nordstrom Rack</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Nordstrom Canada</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Investor Relations</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Press Releases</a></li>
                <li className="footer--li"><a className="footer--a" href="google.com">Nordstrom Media Network</a></li>
            </ul>
        </div>

        <div className="footer--div">
            <h1 className="footer--header"><i className="fa-solid fa-mobile-screen"></i><a style={{color: 'black', fontWeight: 'lighter', margin: 10}} href="google.com">Get our apps</a></h1>
            <ul className="footer--ul--icons">
                <li className="footer--li"><a className="footer--a" href="google.com"><i className="fa-brands fa-instagram"></i></a></li>
                <li className="footer--li"><a className="footer--a" href="google.com"><i className="fa-brands fa-pinterest"></i></a></li>
                <li className="footer--li"><a className="footer--a" href="google.com"><i className="fa-brands fa-twitter"></i></a></li>
                <li className="footer--li"><a className="footer--a" href="google.com"><i className="fa-brands fa-facebook"></i></a></li>
            </ul>
        </div>
    </div>

    <div className="footer--bottom">
        <a className="footer--bottom-a" href="google.com">Privacy</a>
        <a className="footer--bottom-a" href="google.com">Dont Sell My Personal Information</a>
        <a className="footer--bottom-a" href="google.com">Terms Conditions</a>
        <a className="footer--bottom-a" href="google.com">Interest-Based Ads</a>
        <a className="footer--bottom-a" href="google.com">California Supply Chain Act</a>
        <a className="footer--bottom-a" href="google.com"><i style={{margin: "5px"}} className="fa-regular fa-copyright"></i>2022 Nordstrom, Inc.</a>
    </div>
    </>
  )
}

export default Footer
