import React,{useState} from 'react'
import './CarbonUpdate.css'
import { motion } from 'framer-motion'

function CarbonUpdate() {
  const [designated, setDesignated] = useState(0)
  return (
    <motion.div className='Carbon-Update' animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}}>
      <br></br>
      <br></br>
      <span className='Update'>UPDATE ! ! ! !</span>
      <div className='Carbon-Register'>
      <div className='Carbon-info'>
        <div> 
          <div className='Metric-div'>
          <input className='Limit1' placeholder='Limit of Carbon Emmission Designated to your Company' type='text'   pattern="[0-9]*" required/>
          <p className='Limit'>Metric ton </p>
          </div>
        </div>
      </div>
      <div className='Carbon-info1'>
          <div className='Metric-div'>
          <input className='Limit2' placeholder='Last Month Carbon Emission' type='text' required/>
          <span className='Limit'>Metric ton </span>
          </div>

          <div className='Metric-div'>
          <input className='Limit2' placeholder='This Month Carbon Emmission' type='text' required/>
          <span className='Limit'>Metric ton </span>
          </div>
      </div>
      <div className='Carbon-credits'>
        <span className='Credits'>
          
        </span>
      </div>
      </div>
    </motion.div>
  )
}

export default CarbonUpdate