<<<<<<< HEAD
<<<<<<< HEAD

import VideoChat from "./VideoChat";
import Navbar from "./components/Navbar"
// import Chat1 from "./components/Chat1"

import React from "react";
=======
=======
>>>>>>> d02f03b06fe9bf4562926a3dad8c27ac8bbaa900
import React,{useState} from "react"
import Navbar from "./components/Navbar"
// import Chat1 from "./components/Chat1"
import Huddle from "./Huddle"
<<<<<<< HEAD
>>>>>>> d02f03b06fe9bf4562926a3dad8c27ac8bbaa900


=======
>>>>>>> d02f03b06fe9bf4562926a3dad8c27ac8bbaa900



export default function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  return (

    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<<<<<<< HEAD
<<<<<<< HEAD
      <Navbar />
      <VideoChat />
=======
      <Navbar setIsAuth={setIsAuth} isAuth={isAuth} />
>>>>>>> d02f03b06fe9bf4562926a3dad8c27ac8bbaa900
=======
      <Navbar setIsAuth={setIsAuth} isAuth={isAuth} />
>>>>>>> d02f03b06fe9bf4562926a3dad8c27ac8bbaa900
    </div>
  )
}