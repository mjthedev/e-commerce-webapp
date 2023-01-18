import '../css/createAccount-section.css';
// import AddAccount from '../../../../../controllers/addUser';

import React from 'react'




const SectionA = () => {
  return (
    <div className='createacc--container'>
      <div className='createacc--container--child'>
        <h1 className='createacc--header'>Create an Account</h1>
        <p className='createacc--text'>*Required</p>
        <form action='http://68.183.143.190:9000/addaccount' method='POST'>
          <label className='CA--label'>*First name</label>
          <input name='firstname' />
          <label className='CA--label'>*Last name</label>
          <input name='lastname'/>
          <label className='CA--label'>*Username</label>
          <input name='username'/>
          <label className='CA--label'>*Create password</label>
          <input name='password'/>
          <label className='CA--label'>*Email</label>
          <input name='email'/>
          <p className='createacc--text'>By tapping Next, you agree to our Privacy Policy and Terms & Conditions.</p>
          <button className='createacc--button' type="submit">Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default SectionA;
