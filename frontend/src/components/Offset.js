import React, { useState, useEffect } from 'react'
import './Offset.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { app } from '../firebase'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers';
import { abi } from '../Abi';

function Offset({ isAuth }) {
  const db = getFirestore(app)
  const [companyName, setCompanyName] = useState("")
  const [productName, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [cost, setCost] = useState(0)
  const [carbonReduction, setCarbonReduction] = useState(0)
  const GreenCollectionRef = collection(db, "Green")
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuth) {
      navigate("/SignIn")
    } else {

    }
  }, [])

  const contractAddress = "0x831049d3eC5D52BC7171E40FeCEfB4Cf23db02ec"
  const _abi = abi
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(contractAddress, _abi, signer);

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (companyName.length === 0 && productName.length === 0 && description.length === 0 && cost.length === 0 && carbonReduction.length === 0) {
      setError(true)
    }
    if (companyName && productName && description && cost && carbonReduction) {
      const GreenRef = addDoc(GreenCollectionRef, { companyName, productName, description, cost, carbonReduction })
      contract.setCcPrice(cost).
        console.log("Success")
      console.log(`Company Name : ${companyName} , Pr]oduct Name : ${productName} , Description : ${description} , Cost : ${cost
        } , Carbon Reduction : ${carbonReduction} , Doc Ref : ${GreenRef.id}`)
      navigate("/Home")
    }
  }
  return (
    <motion.div className='Offset' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <link href="https://fonts.cdnfonts.com/css/post-no-bills-colombo" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=Acme' rel='stylesheet'></link>
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit} className='Dewang'>
        <br></br>
        <br></br>
        <h2 className='Green'>Green Organization Registration</h2>
        <div className='Offset-info'>
          <h2>Company Name</h2>
          <input type='text' placeholder='Company Name' required className='Offset-Name' onChange={(event) => {
            setCompanyName(event.target.value)
          }} />
        </div>
        <div className='Offset-info'>
          <h2>Product Name</h2>
          <input type='text' placeholder='Product Name' required className='Offset-Name' onChange={(event) => {
            setProductName(event.target.value)
          }} />
        </div>
        <div className='Offset-info'>
          <h2>Product Description</h2>
          <textarea placeholder='Product Description' required className='Offset-Name1' onChange={(event) => {
            setDescription(event.target.value)
          }} />
        </div>
        <div className=''>
          <div className='Product-Cost'>
            <p className='Price'>1 Carbon Credit  = </p>
            <div>
              <input className='Cost' placeholder="99.9" type='integer' required onChange={(event) => {
                setCost(event.target.value)
              }} />
            </div>
            <p className='Price1'>WEth</p>
          </div>
        </div>
        <div className='Offset-info1'>
          <p className='Price2'>Carbon Emission Reduction compared to other similar products</p>
          <div className='Offset-info2'>
            <input placeholder='10000' className='Cost' required type='text' onChange={(event) => {
              setCarbonReduction(event.target.value)
            }} />
            <p className='Price'>Metric ton</p>
          </div>
        </div>
        <div className='Submit-btn1'>
          <button type='Submit' className='Submit1'>Submit</button>
        </div>
      </form>
    </motion.div>
  )
}

export default Offset