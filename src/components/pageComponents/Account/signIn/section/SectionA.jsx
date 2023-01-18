import '../css/signin-section.css';

import React from 'react'

const SectionA = () => {
  return (
    <div className='signin--container'>
      <div className='signin--container--child'>
        <h1 className='signin--header'>Sign In | Create Account</h1>
        <p className='signin--text'>Enter your email to get started.</p>
        <form>
          <label>Email</label>
          <input type='email'/>
          <p className='signin--text'>By tapping Next, you agree to our Privacy Policy and Terms & Conditions.</p>
          <button className='signincreateacc--button' type="submit">Next</button>
        </form>
      </div>
    </div>
  )
}

export default SectionA
