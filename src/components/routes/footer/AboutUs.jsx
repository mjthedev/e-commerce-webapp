import Careers from '../../../pages/footerComponents/aboutUs/careers';
import CoporateSocialResponsibily from '../../../pages/footerComponents/aboutUs/CoporateSocialResponsibily';
import DiversityInclusionBeloning from '../../../pages/footerComponents/aboutUs/diversityInclusionBeloning';
import EcommerceBlog from '../../../pages/footerComponents/aboutUs/ecommerceBlog';
import EcommercePodcast from '../../../pages/footerComponents/aboutUs/ecommercePodcast';
import GetEmailUpdate from '../../../pages/footerComponents/aboutUs/getEmailUpdate';
import TheThread from '../../../pages/footerComponents/aboutUs/theThread';



import React from 'react'
import { Routes, Route} from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
    <Routes>
        <Route path="" element={Careers}/>
        <Route path="" element={CoporateSocialResponsibily}/>
        <Route path="" element={DiversityInclusionBeloning}/>
        <Route path="" element={EcommerceBlog}/>
        <Route path="" element={EcommercePodcast}/>
        <Route path="" element={GetEmailUpdate}/>
        <Route path="" element={TheThread}/>
    </Routes>
    
    </>
  )
}

export default AboutUs
