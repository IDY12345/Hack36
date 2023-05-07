
import Navbar from "./components/Navbar"
// import Chat1 from "./components/Chat1"
import Huddle from "./Huddle"
import React from "react";



export default function App() {

  return (

    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <Navbar />
      <Huddle />
    </div>
  )
}