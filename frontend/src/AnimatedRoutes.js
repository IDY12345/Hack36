import { AnimatePresence } from "framer-motion";
import React from "react";

import { useLocation,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignInSide from "./components/SignIn";
import About from "./components/About";
import RegisterCompany from "./components/RegisterCompany";
import Offset from "./components/Offset";
import CarbonExchange from "./components/CarbonExchange";
import CarbonUpdate from "./components/CarbonUpdate";
import OffsetDescription from "./components/OffsetDescription";
function AnimatedRoutes() {
    const location=useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/Home" element={<Home />}/>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignInSide />} />
            <Route path="/" element={<About />} />
            <Route path="/Register" element={<RegisterCompany />} />
            <Route path="/Offset" element={<Offset />} />
            <Route path="/CarbonExchange" element={<CarbonExchange />} />
            <Route path="/CarbonUpdate" element={<CarbonUpdate />} />
            <Route path="/OffsetBuy" element={<OffsetDescription />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes