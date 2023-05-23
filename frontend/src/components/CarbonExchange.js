import React, { useEffect } from 'react'
import './Carbon.css'
import { motion } from 'framer-motion'
import { useNavigate , Link } from 'react-router-dom'
function CarbonExchange({ isAuth }) {

  const navigate = useNavigate()

  const handleBuy=()=>
  {
    navigate("/BuyPanel")
  }
  
  useEffect(() => {
    if(!isAuth)
    {
      navigate("/SignIn")
    }
  }, [])

  return (
    <motion.div className='Carbon-Exchange' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <br></br>
      <br></br>
      <span className='Exchange'> Carbon Credit Exchange Panel</span>
      <div className='Table'>
        <div className='Row1'></div> 
        <div className='Column1'><p className='Company-Name-Exchange'>Company Name</p>
                                <p className='Company-Name-Exchange'>Tata Steel and Cement</p>
                                    
        </div>
        <div className='Column2'><p className='Company-Name-Exchange'>Carbon Credits</p></div>
        <div className='Column3'><p className='Company-Name-Exchange'>Price</p></div>
        <div className='Column4'><p className='Company-Name-Exchange'>Buy Now</p>
        <Link to="/BuyPanel"><button className='Company-Exchange-Button' onClick={handleBuy}>Buy Now</button></Link>
        
        </div>       
      </div>
    </motion.div>
  )
}

export default CarbonExchange