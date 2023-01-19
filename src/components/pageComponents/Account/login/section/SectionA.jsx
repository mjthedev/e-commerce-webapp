import '../css/login-section.css';
// import AddAccount from '../../../../../controllers/addUser';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, updateUserData } from '../../../../../features/user/userSlice';
import MainHome from '../../../../pages/navbarComponents/MainHome';

var config = {
    headers: {'Access-Control-Allow-Origin': '*'}, 
};


const SectionA = () => {

   const user = useSelector((state) => state.user);
    const dispatch = useDispatch();


 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging username: ', e.target.username.value);
    console.log('Logging password: ', e.target.password.value);
   
    axios.post('http://ecomie-backend-api.marrionjohnson.io:9000/userlogin', {
        username: e.target.username.value,
        password: e.target.password.value
    }, config).then((user) => {
        console.log(user.data)
        dispatch(updateUserData(user.data));
        dispatch(loginUser());
}).catch((err) => {
    console.log(err);
});
//     console.log(user);
}

       
  //  console.log(user);
const isLoggedIn = useSelector((state) => state.user['isLoggedIn']);

return (
    <>
    { isLoggedIn ?  <MainHome/>:
        <div className='login--container'>
        <div className='login--container--child'>
        <h1 className='login--header'>Create Account</h1>
        <p className='login--text'>Check out faster</p>
        <p className='login--text'>Track orders easily</p>
        <p className='login--text'>*Required{user.username}</p>
        <form onSubmit={handleSubmit}>
        <label className='CA--label'>*username</label>
        <input name='username'/>
        <label className='CA--label'>*password</label>
        <input name='password'/>
        <p className='login--text'>By tapping Next, you agree to our Privacy Policy and Terms & Conditions.</p>
        <button className='login--button' type="submit">Log in</button>
        </form>
        </div>
        </div>
    }
    </>
)
}

export default SectionA;
