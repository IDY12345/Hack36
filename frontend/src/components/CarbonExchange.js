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
  const contractAddress = "0x8016f7C87A9A2272b229928bB3CdfF5B6bCd4d22"
  const _abi = abi
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(contractAddress, _abi, signer);

  const handleBuy = async () => {
    console.log((quantity.toString()))
    const tx = {
      value: ethers.utils.parseEther(quantity),
      gasLimit: 30000,
      nonce: undefined
    };
    await contract.buy(tx)
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