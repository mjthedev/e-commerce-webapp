import React from 'react'
import ErrorPage from '../../pages/Error/ErrorPage';
import { Routes, Route} from 'react-router-dom';


import ContactUs from '../../pages/footerComponents/customerService/contactUs';
import GiftCards from '../../pages/footerComponents/customerService/giftCards';
import OrderStatus from '../../pages/footerComponents/customerService/orderStatus';
import PriceAdjustments from '../../pages/footerComponents/customerService/priceAdjustments';
import ProductRetail from '../../pages/footerComponents/customerService/productRetail';
import ReturnPolicyExchanges from '../../pages/footerComponents/customerService/returnPolicyExchanges';
import Shipping from '../../pages/footerComponents/customerService/shipping';
import UnitedStates from '../../pages/footerComponents/customerService/unitedStates';





export const CustomerService = () => {
  return (
    <>
    <Routes>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/giftcards" element={<GiftCards/>}/>
        <Route path="/orderstatus" element={<OrderStatus/>}/>
        <Route path="/priceadjustment" element={<PriceAdjustments/>}/>
        <Route path="/productretail" element={<ProductRetail/>}/>
        <Route path="/returnpolicyexchanges" element={<ReturnPolicyExchanges/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/unitedstatus" element={<UnitedStates/>}/>
        <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}
