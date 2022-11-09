import '../css/login-section.css';
// import AddAccount from '../../../../../controllers/addUser';

import React from 'react'

const SectionA = () => {
  return (
    <div className='login--container'>
      <div className='login--container--child'>
        <h1 className='login--header'>Create Account</h1>
        <p className='login--text'>Check out faster</p>
        <p className='login--text'>Track orders easily</p>
        <p className='login--text'>*Required</p>
        <form action='http://localhost:9000/login' method='POST'>
          <label className='CA--label'>*username</label>
          <input name='username'/>
          <label className='CA--label'>*password</label>
          <input name='password'/>
          <p className='login--text'>By tapping Next, you agree to our Privacy Policy and Terms & Conditions.</p>
          <button className='login--button' type="submit">Log in</button>
        </form>
      </div>
    </div>
  )
}

export default SectionA;