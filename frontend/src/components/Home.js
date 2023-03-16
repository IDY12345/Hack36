import React from 'react'
import './Home.css'
import Sidebar from './Sidebar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <motion.div className='Home1' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Sidebar />
      <Link to="/OffsetBuy">
        <button className='Container'>
            <img src="Assets\logo.png" className='Image1' />
            <h2>Company Name</h2>
        </button>
      </Link>
    </motion.div>
  )
}

export default Home