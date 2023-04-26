import React, { useState,useEffect } from 'react'
import './Home.css'
import Sidebar from './Sidebar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getFirestore,getDocs } from 'firebase/firestore'
import { app } from '../firebase'
function Home() {
  const [organisation, setOrganisation] = useState([])
  const db=getFirestore(app)
  const offsetBuyRef=(db,"Green");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(offsetBuyRef);
      setOrganisation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  })
  return (
    <motion.div className='Home1' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Sidebar />
      <div>
      {
      organisation.map((post)=>
      {
        return(
      <Link to="/OffsetBuy">
        <div className='Container'>
            <img src="Assets\logo.png" className='Image1' alt="" />
            <button className='Company-button'><h2>{post.id}</h2></button>
          </div>
      </Link>
     ) 
     })
     }
     </div>
    </motion.div>
  )
}

export default Home