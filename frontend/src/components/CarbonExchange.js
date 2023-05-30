import React, { useEffect,useState } from 'react'
import './Carbon.css'
import { motion } from 'framer-motion'
import { useNavigate , Link } from 'react-router-dom'
import { getDocs, doc, collection, getFirestore, getDoc } from 'firebase/firestore'
import { app } from '../firebase';
import { ethers } from "ethers"
import { addDoc, setDoc } from "firebase/firestore";
function CarbonExchange({ isAuth }) {
  const [sellPanel, setSellPanel] = useState([])
  const [buyPanelCompanyName, setBuyPanelCompanyName] = useState("")
  const [buyPanelCredits,setBuyPanelCredits]=useState("")
  const [buyPanelPrice,setBuyPanelPrice]=useState("")
  const  db=getFirestore(app)
  const SellRefDoc1=collection(db,"Sell")
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

    const SellHandle=async()=>
    {
      const data=await getDocs(SellRefDoc1);
      setSellPanel(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    }

    SellHandle();

  }, [])

  return (
    <motion.div className='Carbon-Exchange' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <br></br>
      <br></br>
      <span className='Exchange'> Carbon Credit Exchange Panel</span>      

    <br></br>
    <br></br>
    <br></br>
      <table>

        <tr>
          <th>Company Name</th>
          <th>Carbon Credits</th>
          <th>Price(Eth)</th>
          <th>Buy Now</th>
        </tr>
        {sellPanel.map((sell)=>
        {
       return(
        <tr>
          <td>{sell.SellName}</td>
          <td className='Carbon-Credits-Iamge-Flex'><p className='Sell-Panel-Carbon-Credits'>{sell.carbonSell}</p><img src='Assets\carbon_credits1-removebg-preview1.png' alt='' className='CC-Buy-Panel-Row'/></td>
          <td>{sell.carbonPrice} Eth</td>
          <td><button className='Buy-Now-Panel-Button'>Buy Now</button></td>
        </tr>
        )  
      })}
      </table>

    </motion.div>
  )
}

export default CarbonExchange