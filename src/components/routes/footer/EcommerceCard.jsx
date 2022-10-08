import {Routes, Route} from 'react-router-dom'

import ApplyForEcommerceCard from '../../../pages/footerComponents/ecommerceCard/applyForEcommerceCard';
import ManageMyEcommerceCard from '../../../pages/footerComponents/ecommerceCard/manageMyEcommerceCard';
import PayMyBills from '../../../pages/footerComponents/ecommerceCard/payMyBills';
import TheEcommerceClubRewards from '../../../pages/footerComponents/ecommerceCard/theEcommerceClubRewards';



import React from 'react'

const EcommerceCard = () => {
  return (
    <>
        <Routes>
            <Route path="" element={ApplyForEcommerceCard}/>
            <Route path="" element={ManageMyEcommerceCard}/>
            <Route path="" element={PayMyBills}/>
            <Route path="" element={TheEcommerceClubRewards}/>
        </Routes>
    </>
  )
}

export default EcommerceCard
