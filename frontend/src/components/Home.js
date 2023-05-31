import React, { useState, useEffect } from 'react'
import './Home.css'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import { app } from '../firebase'
import { ethers } from 'ethers'
function Home({ isAuth }) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  // const signer = provider.getSigner()

  // console.log(isAuth)
  const navigate = useNavigate()
  const [organisation, setOrganisation] = useState([])
  const db = getFirestore(app)
  const offsetBuyRef = collection(db, "Green");
  useEffect(() => {

    if (!isAuth) {
      navigate("/SignIn")
    }

    const OffsetHandle = async () => {
      const data = await getDocs(offsetBuyRef)
      setOrganisation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    OffsetHandle();
  })

  return (
    <motion.div className='Home1' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <div className='All-Offsets'>
        {organisation.map((post) => {
          console.log(post)
          return (
            <div className='Container'>
              <img src="Assets\logo1.png" className='Image1' alt="" />
              <Link to={`/OffsetBuy/${post.id}`}><button className='Company-button'><h2>{post.companyName}</h2></button></Link>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Home