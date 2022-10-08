import React from 'react'
import { Routes, Route} from 'react-router-dom';
import ErrorPage from '../../../pages/Error/ErrorPage';

import Careers from '../../../pages/footerComponents/aboutUs/careers';
import CoporateSocialResponsibily from '../../../pages/footerComponents/aboutUs/corporateSocialResponsibility';
import DiversityInclusionBeloning from '../../../pages/footerComponents/aboutUs/diversityInclusionBeloning';
import EcommerceBlog from '../../../pages/footerComponents/aboutUs/ecommerceBlog';
import EcommercePodcast from '../../../pages/footerComponents/aboutUs/ecommercePodcast';
import GetEmailUpdate from '../../../pages/footerComponents/aboutUs/getEmailUpdate';
import TheThread from '../../../pages/footerComponents/aboutUs/theThread';




const AboutUs = () => {
  return (
    <>
    <Routes>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/corporatesocialresponsibility" element={<CoporateSocialResponsibily/>}/>
        <Route path="/diversityinclusionbelonging" element={<DiversityInclusionBeloning/>}/>
        <Route path="/ecommerceblog" element={<EcommerceBlog/>}/>
        <Route path="/ecommercepodcast" element={<EcommercePodcast/>}/>
        <Route path="/getemailupdates" element={<GetEmailUpdate/>}/>
        <Route path="/thethread" element={<TheThread/>}/>
        <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    
    </>
  )
}

export default AboutUs
