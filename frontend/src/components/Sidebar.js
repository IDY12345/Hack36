import React from 'react'
import './Sidebar.css'
import { Link} from 'react-router-dom'
import { motion } from 'framer-motion'

function Sidebar() {
  return (
    <motion.div className='Sidebar' animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}}>
        <div className='Sidebar-Nav'>
            <Link to="/Register"><button className='Register-btn'>Register Company</button></Link>
            <Link to="/Offset"><button className='Offset-add'>Green Organisation Registration</button></Link>
            <Link to="/CarbonUpdate"><button className='Offset-add'>Carbon Credits Update</button></Link>
            <Link to="/CarbonExchange"><button className='Offset-add'>Carbon Credits Exchange</button></Link>
        </div>
    </motion.div>
  )
}

export default Sidebar