import React,{useState,useEffect} from 'react'
import './Offset.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { app, db } from '../firebase'
import { motion } from 'framer-motion'

function Offset() {
  const db=getFirestore(app)
  const [companyName, setCompanyName] = useState("")
  const [productName, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [cost, setCost] = useState(0)
  const [carbonReduction, setCarbonReduction] = useState(0)
  const GreenCollectionRef=collection(db,"Green")
  const handleSubmit=()=>
  {
    const GreenRef=addDoc(GreenCollectionRef,{companyName,productName,description,cost,carbonReduction})
    console.log(`Company Name : ${companyName} , Product Name : ${productName} , Description : ${description} , Cost : ${cost
    } , Carbon Reduction : ${carbonReduction} , Doc Ref : ${GreenRef.id}`)
  }
  return (
    <motion.div className='Offset' animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}}>
      <h2 className='Green'>Green Organization Registration</h2>
      <div className='Offset-info'>
        <div>
          <input type='text' placeholder='Company Name' className='Offset-Name' onChange={(event) => {
          setCompanyName(event.target.value)
        }} />
        </div>
        <div>
          <input type='text' placeholder='Product Name' className='Offset-Name' onChange={(event) => {
          setProductName(event.target.value)
        }} />
        </div>
      </div>
      <div className='Offset-info'>
        <textarea placeholder='Product Description' className='Offset-Name1' onChange={(event) => {
          setDescription(event.target.value)
        }} />
      </div>
      <div className=''>
        <div className='Product-Cost'>
          <p className='Price'>Cost = </p>
          <div>
            <input className='Cost' placeholder="99.9" type='integer' onChange={(event) => {
          setCost(event.target.value)
        }} />
          </div>
          <p className='Price'>Eth</p>
        </div>
      </div>
      <div className='Offset-info1'>
        <p className='Price'>Carbon Emission Reduction compared to other similar products</p>
        <div className='Offset-info2'>
          <input placeholder='10000' className='Cost' type='text' onChange={(event) => {
          setCarbonReduction(event.target.value)
        }} />
          <p className='Price'>Metric ton</p>
        </div>
      </div>
      <div className='Submit-btn1'>
        <button type='Submit' className='Submit1' onClick={handleSubmit}>Submit</button>
      </div>
    </motion.div>
  )
}

export default Offset