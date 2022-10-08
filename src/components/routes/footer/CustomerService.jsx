import { Routes, Route} from 'react-router-dom';


import ContactUs from '../../../pages/footerComponents/customerService/contactUs';
import GiftCards from '../../../pages/footerComponents/customerService/giftCards';
import OrderStatus from '../../../pages/footerComponents/customerService/orderStatus';
import PriceAdjustments from '../../../pages/footerComponents/customerService/priceAdjustments';
import ProductRetail from '../../../pages/footerComponents/customerService/productRetail';
import ReturnPolicyExchanges from '../../../pages/footerComponents/customerService/returnPolicyExchanges';
import Shipping from '../../../pages/footerComponents/customerService/shipping';
import UnitedStates from '../../../pages/footerComponents/customerService/unitedStates';




import React from 'react'

export const CustomerService = () => {
  return (
    <>
    <Routes>

        <Route path="" element={ContactUs}/>
        <Route path="" element={GiftCards}/>
        <Route path="" element={OrderStatus}/>
        <Route path="" element={PriceAdjustments}/>
        <Route path="" element={ProductRetail}/>
        <Route path="" element={ReturnPolicyExchanges}/>
        <Route path="" element={Shipping}/>
        <Route path="" element={UnitedStates}/>
    </Routes>
    </>
  )
}
