import React from 'react';
import {Routes} from 'react-router-dom';

import AboutUs from './AboutUs';
import { CustomerService } from './CustomerService';
import EcommerceCard from './EcommerceCard';
import EcommerceInc from './EcommerceInc';
import GetOurApp from './GetOurApp';
import StoresServices from './StoresServices';

const FooterRoutes = () => {
  return (
    <>
    <Routes>
        <AboutUs/>
        <CustomerService/>
        <EcommerceCard/>
        <EcommerceInc/>
        <GetOurApp/>
        <StoresServices/>
    </Routes>
    </>
  )
}


export default FooterRoutes
