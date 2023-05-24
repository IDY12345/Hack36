import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import About from "./components/About";
import RegisterCompany from "./components/RegisterCompany";
import Offset from "./components/Offset";
import CarbonExchange from "./components/CarbonExchange";
import OffsetDescription from "./components/OffsetDescription";
import Login from "./components/SignIn";
import CarbonCredits from "./components/CarbonCredits";
import Climate from "./components/Climate";
import VideoChat from "./VideoChat";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Founders from "./components/Founders";
import BuyPanel from "./components/BuyPanel";
function AnimatedRoutes({ setIsAuth, isAuth,setNavbar,navbar }) {
  const [userRegistered, setUserRegistered] = useState(false)
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/Home" element={<Home isAuth={isAuth} />} />
        <Route path="/SignUp" element={<SignUp isAuth={isAuth} />} />
        <Route path="/SignIn" element={<Login setIsAuth={setIsAuth} isAuth={isAuth} setUserRegistered={setUserRegistered}  />} />
        <Route path="/" element={<About isAuth={isAuth} />} />
        <Route path="/Register" element={<RegisterCompany isAuth={isAuth} userRegistered={userRegistered} setUserRegistered={setUserRegistered} />} />
        <Route path="/Offset" element={<Offset isAuth={isAuth} />} />
        <Route path="/CarbonExchange" element={<CarbonExchange isAuth={isAuth} />} />
        <Route path="/OffsetBuy" element={<OffsetDescription isAuth={isAuth} />} />
        <Route path="/CarbonCredits" element={<CarbonCredits />} />
        <Route path="/Climate" element={<Climate />} />
        <Route path="/VideoChat" element={<VideoChat />}></Route>
        <Route path="/Profile" element={<Profile isAuth={isAuth} />} />
        <Route path="Edit-Profile" element={<EditProfile isAuth={isAuth}/>} />
        <Route path="/Founders" element={<Founders />} />
        <Route path="/Buypanel" element={<BuyPanel /> } />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes