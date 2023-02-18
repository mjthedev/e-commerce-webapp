import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ErrorPage from '../../pages/Error/ErrorPage';

import ApplyForEcommerceCard from '../../pages/footerComponents/ecommerceCard/applyForEcommerceCard';
import ManageMyEcommerceCard from '../../pages/footerComponents/ecommerceCard/manageMyEcommerceCard';
import PayMyBills from '../../pages/footerComponents/ecommerceCard/payMyBills';
import TheEcommerceClubRewards from '../../pages/footerComponents/ecommerceCard/theEcommerceClubRewards';




const EcommerceCard = () => {
  return (
    <>
        <Routes >
            <Route path="/applyforecommercecard" element={<ApplyForEcommerceCard/>}/>
            <Route path="/managemyecommercecard" element={<ManageMyEcommerceCard/>}/>
            <Route path="/paymybills" element={<PayMyBills/>}/>
            <Route path="/theecommerceclubrewards" element={<TheEcommerceClubRewards/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </>
  )
}

export default EcommerceCard
