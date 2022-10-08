import React from 'react'
import '../css/footer.css'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <>

    <div className="footer">
        <div className="footer--div">
            <h1 className="footer--header">Customer Service</h1>
            <ul className="footer--ul">
                <li className="footer--li"><Link className="footer--a" to={"/footer/customerservice/contactus"}>Contact Us </Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/customerservice/orderstatus"}>Order Status </Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/customerservice/shipping"}>Shipping </Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/customerservice/returnpolicyexchanges"}>Return Policy Exchanges</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/customerservice/priceadjustment"}>Price Adjustment</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/customerservice/giftcards"}>Gift Cards</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/customerservice/faq"}>FAQ</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/customerservice/productreacalls"}>Product Recalls</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/customerservice/unitedstates"}>United States</Link></li>
            </ul>
        </div>

        <div className="footer--div">
            <h1 className="footer--header">About Us</h1>
                <ul className="footer--ul">
                <li className="footer--li"><Link className="footer--a" to={"/footer/aboutus/careers"}>Careers</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/aboutus/corporatesocialresponsibility"}>Corporate Social Responsibility</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/aboutus/diversityinclusionbelonging"}>Diversity, Inclusion, Belonging</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/aboutus/getemailupdates"}>Get Email Updates</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/aboutus/ecommerceblog"}>Ecommerce Blog</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/aboutus/thethread"}>The Thread</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/aboutus/ecommercepodcast"}>Ecommerce Podcast</Link></li>    
            </ul>
        </div>

        <div className="footer--div">
            <h1 className="footer--header">Stores & Services</h1>
            <ul className="footer--ul">
                <li className="footer--li"><Link className="footer--a" to={"/footer/stores&services/findastore"}>Find a Store</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/stores&services/freestylehelp"}>Free Style Help</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/stores&services/alterations&tailoring"}>Alteration & Tailoring</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/stores&services/popinshop"}>Pop-In Shop</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/stores&services/virtualevents"}>Virtual Events</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/stores&services/spaecommerce"}>Spa Ecommerce</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/stores&services/ecommereresturants"}>Ecommerce Resturants</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/stores&services/ecommercelocal"}>Ecommerce Local</Link></li>
            </ul>
        </div>

        <div className="footer--div">
            <h1 className="footer--header">Ecommerce Card</h1>
            <ul className="footer--ul">
                <li className="footer--li"><Link className="footer--a" to={"/footer/ecommercecard/theecommerceclubrewards"}>The Ecommerce Club Rewards</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/ecommercecard/applyforecommercecard"}>Apply for Ecommerce Card</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/ecommercecard/paymybills"}>Pay my Bills</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/ecommercecard/managemyecommercecard"}>Manage my Ecommerce Card</Link></li>
            </ul>
        </div>

        <div className="footer--div">
            <h1 className="footer--header">Ecommerce, Inc.</h1>
            <ul className="footer--ul">
                <li className="footer--li"><Link className="footer--a" to={"/footer/ecommerceinc/ecommercerack"}>Ecommerce Rack</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/ecommerceinc/ecommercecanada"}>Ecommerce Canada</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/ecommerceinc/investorrelations"}>Investor Relations</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/ecommerceinc/pressreleases"}>Press Releases</Link></li>
                <li className="footer--li"><Link className="footer--a" to={"/footer/ecommerceinc/ecommercemedianetwork"}>Ecommerce Media Network</Link></li>
            </ul>
        </div>

        <div className="footer--div">
        <Link className="footer--header" to={"/footer/getourapp/app"}>Get Our App</Link>
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
        <a className="footer--bottom-a" href="google.com"><i style={{margin: "5px"}} className="fa-regular fa-copyright"></i>2022 Ecommerce, Inc.</a>
    </div>
    </>
  )
}

export default Footer
