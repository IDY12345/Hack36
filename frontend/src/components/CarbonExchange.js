import React, { useEffect, useState } from 'react'
import './Carbon.css'
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import { getDocs, doc, collection, getFirestore, getDoc } from 'firebase/firestore'
import { app } from '../firebase';
import { ethers } from "ethers"
import { addDoc, setDoc } from "firebase/firestore";
import { abi } from '../Abi.js';
function CarbonExchange({ isAuth }) {
  const [sellPanel, setSellPanel] = useState([])
  const [buyPanelCompanyName, setBuyPanelCompanyName] = useState("")
  const [buyPanelCredits, setBuyPanelCredits] = useState("")
  const [buyPanelPrice, setBuyPanelPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const db = getFirestore(app)
  const SellRefDoc1 = collection(db, "Sell")
  const navigate = useNavigate()
  const contractAddress = "0x2e7623575950d4A4C0302D5eEEBf74a34fA8E1D2"
  const _abi = abi
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(contractAddress, _abi, signer);

  const handleBuy = async () => {
    console.log((quantity.toString()))
    await contract.buy({ value: ethers.utils.parseUnits(quantity.toString(), "ether") })
  }
  useEffect(() => {
    if (!isAuth) {
      navigate("/SignIn")
    }
    const SellHandle = async () => {
      const data = await getDocs(SellRefDoc1);
      setSellPanel(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
        {sellPanel.map((sell) => {
          return (
            <tr>
              <td>{sell.SellName}</td>
              <td className='Carbon-Credits-Iamge-Flex'><p className='Sell-Panel-Carbon-Credits'>{sell.carbonSell}</p><img src='Assets\carbon_credits1-removebg-preview1.png' alt='' className='CC-Buy-Panel-Row' /></td>
              <td>{sell.carbonPrice} Eth</td>
              <div>
                <input onChange={(e) => { setQuantity(e.target.value) }}></input>
                <td><button className='Buy-Now-Panel-Button' onClick={handleBuy}>Buy Now</button></td>
              </div>
            </tr>
          )
        })}
      </table>

    </motion.div>
  )
}

export default CarbonExchange