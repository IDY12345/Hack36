import React, { useEffect } from 'react'
import './Carbon.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
function CarbonExchange({ isAuth }) {

  const navigate = useNavigate()

  useEffect(() => {
    // if(!isAuth)
    // {
    //   navigate("/SignIn")
    // }
  }, [])

  return (
    <motion.div className='Carbon-Exchange' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <br></br>
      <br></br>
      <span className='Exchange'> Carbon Credit Exchange Panel</span>
      <div className='Table'>
        <div className='Line'></div>
        <div className='Row1'></div>
      </div>
    </motion.div>
  )
}

export default CarbonExchange