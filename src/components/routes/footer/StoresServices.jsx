import { Routes, Route} from 'react-router-dom';
import ErrorPage from '../../../pages/Error/ErrorPage';
import AlterationsTailoring from '../../../pages/footerComponents/stores&services/alterations&Tailoring';
import EcommerceLocal from '../../../pages/footerComponents/stores&services/ecommerceLocal';
import EcommerceResturants from '../../../pages/footerComponents/stores&services/ecommerceResturants';
import FindAStore from '../../../pages/footerComponents/stores&services/findAStore';
import FreeStyleHelp from '../../../pages/footerComponents/stores&services/freeStyleHelp';
import PopInShop from '../../../pages/footerComponents/stores&services/popInShop';
import SpaEcommerce from '../../../pages/footerComponents/stores&services/spaEcommerce';
import VirtualEvents from '../../../pages/footerComponents/stores&services/virtualEvents';





const StoresServices = () => {
  return (
    <>
        <Routes path="/stores&services">
            <Route path="/alterations&tailoring" element={<AlterationsTailoring/>}/>
            <Route path="/ecommercelocal" element={<EcommerceLocal/>}/>
            <Route path="/ecommereresturants" element={<EcommerceResturants/>}/>
            <Route path="/findastore" element={<FindAStore/>}/>
            <Route path="/freestylehelp" element={<FreeStyleHelp/>}/>
            <Route path="/popinshop" element={<PopInShop/>}/>
            <Route path="/spaecommerce" element={<SpaEcommerce/>}/>
            <Route path="/virtualevents" element={<VirtualEvents/>}/>
            <Route path="*" element={<ErrorPage/>}/>
            
        </Routes>
    </>
  )
}

export default StoresServices
