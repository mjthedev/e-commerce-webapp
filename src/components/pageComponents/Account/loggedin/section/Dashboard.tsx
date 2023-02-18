import '../css/signin-section.css';

import React from 'react'
// @typescript-eslint/no-unused-vars
import { User } from '../../../../../types/userType';



const SectionA = (props: any) => {
  return (
      <>
        <h1>welcome {props.values.username}</h1>
      </>
  )
}

export default SectionA
