
import React from 'react'
import ErrorPage from '../../pages/Error/ErrorPage';
import {Routes, Route} from 'react-router-dom';
import GetOurApp from '../../pages/footerComponents/getOurApp/getOurApp'







const GetApp = () => {
  return (
    <>
        <Routes path="getourapp">
          <Route path="/app" element={<GetOurApp/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </>
  )
}

export default GetApp
