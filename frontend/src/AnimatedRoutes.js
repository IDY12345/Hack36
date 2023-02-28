import { AnimatePresence } from "framer-motion";
import React from "react";

import { useLocation,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignInSide from "./components/SignIn";
import About from "./components/About";

function AnimatedRoutes() {
    const location=useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/Home" element={<Home />}/>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignInSide />} />
            <Route path="/" element={<About />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes