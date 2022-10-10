import React from 'react'
import ErrorPage from '../../pages/Error/ErrorPage';
import {Routes, Route} from 'react-router-dom'

import EcommerceCanada from '../../pages/footerComponents/ecommerceInc/ecommerceCanada';
import EcommerceMediaNetwork from '../../pages/footerComponents/ecommerceInc/ecommerceMediaNetwork';
import EcommerceRack from '../../pages/footerComponents/ecommerceInc/ecommerceRack';
import InvestorRelations from '../../pages/footerComponents/ecommerceInc/investorRelations';
import PressReleases from '../../pages/footerComponents/ecommerceInc/pressReleases';



const EcommerceInc = () => {
  return (
    <>
        <Routes path="/ecommerceinc">
            <Route path="/ecommercecanada" element={<EcommerceCanada/>}/>
            <Route path="/ecommercemedianetwork" element={<EcommerceMediaNetwork/>}/>
            <Route path="/ecommercerack" element={<EcommerceRack/>}/>
            <Route path="/investorrelations" element={<InvestorRelations/>}/>
            <Route path="/pressreleases" element={<PressReleases/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </>
  )
}

export default EcommerceInc
