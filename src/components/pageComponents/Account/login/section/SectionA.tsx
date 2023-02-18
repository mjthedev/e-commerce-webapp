import '../css/login-section.css';
// import AddAccount from '../../../../../controllers/addUser';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, updateUserData } from '../../../../../features/user/userSlice';
import MainHome from '../../../../pages/navbarComponents/MainHome';
import React, { BaseSyntheticEvent, FormEventHandler, SyntheticEvent } from 'react';
import { User } from '../../../../../types/userType';
import { type } from 'os';

var config = {
    headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded'
        }, 
};


const SectionA = () => {

   const userState = useSelector((state: User) => state);
    const dispatch = useDispatch();
    console.log('////////////////////////////////////////////////////')


const testSubmit = (event : BaseSyntheticEvent) => {
    event.preventDefault();
    console.log(event)
    const target = event.target;
    // const name = target.username;
    // console.log(name)
    console.log(event.target.username.value)
    console.log(event.target.password.value)
    const username = event.target.username.value;
    const password = event.target.password.value;
    // provide username and password to getter function in class
    // use the returned object from the api to populate the tree with user object
    console.log(username)
    console.log(password)
    console.log('user from state: ', userState)
}
//  const handleSubmit = (e: Event) => {
//     e.preventDefault();
//     const {target} = e;
//     console.log(target);

//     // console.log('Logging username: ', e.target.username.value);
//     // console.log('Logging password: ', e.target.password.value);
//     const un: string = 'username'
//     const pw: string = 'password'
//     if(target) {
//         axios.post('https://ecomie-backend-api.marrionjohnson.io:9000/userlogin', {

//         // username: (e.target as HTMLInputElement).name,
//         // password: e.target?.addEventListener(pw, function(){})
//     }, config).then((user) => {
//         console.log(user.data)
//         dispatch(updateUserData(user.data));
//         dispatch(loginUser());
// }).catch((err) => {
//     console.log(err);
// });
//     }
    
// //     console.log(user);
// }

       
  //  console.log(user);
const isLoggedIn = useSelector((state: User) => state['isLoggedIn']);

return (
    <>
    { isLoggedIn ?  <MainHome/>:
        <div className='login--container'>
        <div className='login--container--child'>
        <h1 className='login--header'>Create Account</h1>
        <p className='login--text'>Check out faster</p>
        <p className='login--text'>Track orders easily</p>
        <p className='login--text'>*Required{''}</p>
        <form onSubmit={testSubmit}>
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

