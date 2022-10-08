import {Routes, Route} from 'react-router-dom';
import ErrorPage from '../../../pages/Error/ErrorPage';

import AboutUs from './AboutUs';
import { CustomerService } from './CustomerService';
import EcommerceCard from './EcommerceCard';
import EcommerceInc from './EcommerceInc';
import GetApp from './GetOurApp';
import StoresServices from './StoresServices';

const FooterRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/aboutus/*" element={<AboutUs/>}/>
      <Route path="/customerservice/*" element={<CustomerService/>}/>
      <Route path="/ecommercecard/*" element={<EcommerceCard/>}/>
      <Route path="/ecommerceinc/*" element={<EcommerceInc/>}/>
      <Route path="/getourapp/*" element={<GetApp/>}/>
      <Route path="/stores&services/*" element={<StoresServices/>}/>
      <Route path="*" element={<ErrorPage/>}/>
   </Routes>
        
    </>
  )
}




export default FooterRoutes
