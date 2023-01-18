import '../css/navbar.css'
import '../css/dropdown.css'
import {
    Link
} from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../features/user/userSlice'




const NavigationBar = () => {

function handleLogout() {

    axios.get('http://localhost:9000/logout')
    dispatch(logoutUser());

}


const isLoggedIn = useSelector((state) => state.user['isLoggedIn']);
const user = useSelector((state) => state.user.values);
const dispatch = useDispatch();

console.log(isLoggedIn);


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
        { isLoggedIn ? 
            <p className="navbar--main-signin-item">Welcome, {user.username}  <Link className='signin--button' onClick={(e) => { e.preventDefault(); console.log('logging out'); handleLogout()}} to={"/Login"}>Logout</Link> <i className="navbar--main-signin-icon fa-solid fa-angle-down"></i></p> :
            <p className="navbar--main-signin-item"><Link className='signin--button' to={"/Login"}>Sign In</Link> <i className="navbar--main-signin-icon fa-solid fa-angle-down"></i></p> 
        }

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
        <li className="navbar-li-items"><Link className='navbar--a-items' to={"/YoungAdults"}>Young Adults</Link></li>
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
