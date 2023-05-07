import { AnimatePresence } from "framer-motion";
import React,{useState} from "react";

import { useLocation,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import About from "./components/About";
import RegisterCompany from "./components/RegisterCompany";
import Offset from "./components/Offset";
import CarbonExchange from "./components/CarbonExchange";
import CarbonUpdate from "./components/CarbonUpdate";
import OffsetDescription from "./components/OffsetDescription";
import Login from "./components/SignIn";
function AnimatedRoutes({setIsAuth,isAuth}) {
    // const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
    const location=useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/Home" element={<Home isAuth={isAuth} />}/>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<Login setIsAuth={setIsAuth} isAuth={isAuth}/>} />
            <Route path="/" element={<About isAuth={isAuth} />} />
            <Route path="/Register" element={<RegisterCompany isAuth={isAuth} />} />
            <Route path="/Offset" element={<Offset isAuth={isAuth} />} />
            <Route path="/CarbonExchange" element={<CarbonExchange isAuth={isAuth} />} />
            <Route path="/CarbonUpdate" element={<CarbonUpdate isAuth={isAuth} />} />
            <Route path="/OffsetBuy" element={<OffsetDescription isAuth={isAuth} />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes