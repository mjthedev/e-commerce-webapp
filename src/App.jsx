import React from 'react'

import {
  Routes,
  Route,
} from 'react-router-dom';
import MainHome from './pages/navbarComponents/MainHome.jsx';
import ErrorPage from './pages/Error/ErrorPage';
import HolidayGifts from './pages/navbarComponents/HolidayGifts.js';
import Sale from './pages/navbarComponents/Sale'
import Women from './pages/navbarComponents/Women'
import Men from './pages/navbarComponents/Men'
import Kids from './pages/navbarComponents/Kids'
import YoungAdults from './pages/navbarComponents/YoungAdults';
import Activewear from './pages/navbarComponents/Activewear';
import Home from './pages/navbarComponents/Home';
import Beauty from './pages/navbarComponents/Beauty';
import Designer from './pages/navbarComponents/Designer';
import Gift from './pages/navbarComponents/Gift';
import Threads from './pages/navbarComponents/Threads';
import FooterRoutes from './components/routes/footer/FooterRoutes';





function App() {
  return (
    <>
          <Routes>
            <Route path="/" element = {<MainHome/>}/>
            <Route path="/HolidayGifts" element = {<HolidayGifts/>}/>
            <Route path="/Sale" element = {<Sale/>}/>
            <Route path="/Women" element = {<Women/>}/>
            <Route path="/Men" element = {<Men/>}/>
            <Route path="/Kids" element = {<Kids/>}/>
            <Route path="/YoungAdults" element = {<YoungAdults/>}/>
            <Route path="/Activewear" element = {<Activewear/>}/>
            <Route path="/Home" element = {<Home/>}/>
            <Route path="/Beauty" element = {<Beauty/>}/>
            <Route path="/Designer" element = {<Designer/>}/>
            <Route path="/Gift" element = {<Gift/>}/>
            <Route path="/Threads" element = {<Threads/>}/>
            <Route path="*" element={<ErrorPage/>}/>

            <FooterRoutes/>

          </Routes>
      </>      
  );
}

export default App;
