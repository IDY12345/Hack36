
import VideoChat from "./VideoChat";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
// import Chat1 from "./components/Chat1"

import React, { useState } from "react";




export default function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  const [navbar, setNavbar] = useState(localStorage.getItem("navbar"))
  return (


    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <Navbar setIsAuth={setIsAuth} isAuth={isAuth} setNavbar={setNavbar} navbar={navbar} />
      <Footer />
    </div>
  )
}