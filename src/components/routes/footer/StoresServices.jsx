import AlterationsTailoring from '../../../pages/footerComponents/stores&services/alterations&Tailoring';
import EcommerceLocal from '../../../pages/footerComponents/stores&services/ecommerceLocal';
import EcommerceResturants from '../../../pages/footerComponents/stores&services/ecommerceResturants';
import FindAStore from '../../../pages/footerComponents/stores&services/findAStore';
import FreeStyleHelp from '../../../pages/footerComponents/stores&services/freeStyleHelp';
import PopInShop from '../../../pages/footerComponents/stores&services/popInShop';
import SpaEcommerce from '../../../pages/footerComponents/stores&services/spaEcommerce';
import VirtualEvents from '../../../pages/footerComponents/stores&services/virtualEvents';



import { Routes, Route} from 'react-router-dom';

const StoresServices = () => {
  return (
    <>
        <Routes>
            <Route path="" element={AlterationsTailoring}/>
            <Route path="" element={EcommerceLocal}/>
            <Route path="" element={EcommerceResturants}/>
            <Route path="" element={FindAStore}/>
            <Route path="" element={FreeStyleHelp}/>
            <Route path="" element={PopInShop}/>
            <Route path="" element={SpaEcommerce}/>
            <Route path="" element={VirtualEvents}/>
        </Routes>
    </>
  )
}

export default StoresServices
