import React from "react";

import { Routes, Route } from "react-router-dom";

import MainHome from "./components/pages/navbarComponents/MainHome";
import ErrorPage from "./components/pages/Error/ErrorPage";
import HolidayGifts from "./components/pages/navbarComponents/HolidayGifts";
import Sale from "./components/pages/navbarComponents/Sale";
import Women from "./components/pages/navbarComponents/Women";
import Men from "./components/pages/navbarComponents/Men";
import Kids from "./components/pages/navbarComponents/Kids";
import YoungAdults from "./components/pages/navbarComponents/YoungAdults";
import Activewear from "./components/pages/navbarComponents/Activewear";
import Home from "./components/pages/navbarComponents/Home";
import Beauty from "./components/pages/navbarComponents/Beauty";
import Designer from "./components/pages/navbarComponents/Designer";
import Gift from "./components/pages/navbarComponents/Gift";
import Threads from "./components/pages/navbarComponents/Threads";
import FooterRoutes from "./components/routes/footer/FooterRoutes";
import SignIn from "./components/pages/account/signIn/SignIn";
import CreateAcc from "./components/pages/account/createAccount/CreateAccount";
import Login from "./components/pages/account/login/Login";
import LoggedIn from "./components/pages/account/loggedIn/LoggedIn";
import TopAd from "./components/TopAd";
import ItemPage from "./components/pageComponents/item/Item";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TopAd />
              <NavigationBar />
              <Header />
              <MainHome />
              <Footer />
            </>
          }
        />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Create" element={<CreateAcc />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/HolidayGifts" element={<HolidayGifts />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/YoungAdults" element={<YoungAdults />} />
        <Route path="/Activewear" element={<Activewear />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Beauty" element={<Beauty />} />
        <Route path="/Designer" element={<Designer />} />
        <Route path="/Gift" element={<Gift />} />
        <Route path="/Threads" element={<Threads />} />
        <Route path="/LoggedIn" element={<LoggedIn />} />
        <Route path="/Item" element={<ItemPage />} />

        <Route path="*" element={<ErrorPage />} />
        <Route path="/footer/*" element={<FooterRoutes />} />
      </Routes>
    </>
  );
}

export default App;
