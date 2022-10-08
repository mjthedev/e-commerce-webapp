import {Routes, Route} from 'react-router-dom'

import EcommerceCanada from '../../../pages/footerComponents/ecommerceInc/ecommerceCanada';
import EcommerceMediaNetwork from '../../../pages/footerComponents/ecommerceInc/ecommerceMediaNetwork';
import EcommerceRack from '../../../pages/footerComponents/ecommerceInc/ecommerceRack';
import InvestorRelations from '../../../pages/footerComponents/ecommerceInc/investorRelations';
import PressReleases from '../../../pages/footerComponents/ecommerceInc/pressReleases';


import React from 'react'

const EcommerceInc = () => {
  return (
    <>
        <Routes>
        <Route path="" element={EcommerceCanada}/>
        <Route path="" element={EcommerceMediaNetwork}/>
        <Route path="" element={EcommerceRack}/>
        <Route path="" element={InvestorRelations}/>
        <Route path="" element={PressReleases}/>
        </Routes>
    </>
  )
}

export default EcommerceInc
