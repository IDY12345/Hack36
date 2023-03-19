import React from 'react'
import './Carbon.css'
import { motion } from 'framer-motion'
function CarbonExchange() {
  return (
    <motion.div className='Carbon-Exchange' animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}}>
      <br></br>
      <br></br>
    <span className='Exchange'> Carbon Credit Exchange Panel</span>

    <div className='List-Start'>
      <span className='Name-div'>Company Name</span>
      <span className='Name-div'>Carbon Credits
      <img src="Assets\Credits2.png" className='credits-image'/></span>
      <span className='Name-div'>Price(Eth)</span>
    </div>
    <div className='Button-Buy'>
    <div className='List'>
      <span className='Name-div'>Tata Group of Steel & Cement</span>
      <span className='Name-div'>100</span>
      <span className='Name-div'>200 Eth</span>
    </div>
    <span><button className='Buy-btn'>Buy Now</button></span>
    </div>
    </motion.div>
  )
}

export default CarbonExchange