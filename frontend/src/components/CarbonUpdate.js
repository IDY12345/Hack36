import React,{useState,useEffect} from 'react'
import './CarbonUpdate.css'
import { motion } from 'framer-motion'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { app } from '../firebase'
import { useNavigate } from 'react-router-dom'

function CarbonUpdate({isAuth}) {
  const db=getFirestore(app);
  const [designated, setDesignated] = useState(0);
  const [lastMonth, setLastMonth] = useState(0);
  const [thisMonth, setThisMonth] = useState(0);
  const [carbonCredits, setCarbonCredits] = useState(0)
  const updateCollectionRef=collection(db,"Update");
  const [error, setError] = useState(false)
  const navigate=useNavigate()

  useEffect(()=>
  {
    if(!isAuth)
    {
      navigate("/SignIn")
    }
  },[])

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    if(designated.length===0 && lastMonth.length===0 && thisMonth.length===0)
    {
      setError(true)
    }
    if(designated&&lastMonth&&thisMonth)
    {
    const UpdateRef=addDoc(updateCollectionRef,{designated,lastMonth,thisMonth,carbonCredits})
    console.log(`Designated Emmision: ${designated} , Last Month Emission : ${lastMonth} , This Month Emmision : ${thisMonth} , Carbon Credits : ${carbonCredits} , Doc Ref : ${UpdateRef.id}`)
    navigate("/Home")
     } }
  return (
    <motion.div className='Carbon-Update' animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}}>
      <link href='https://fonts.googleapis.com/css?family=Acme' rel='stylesheet'></link>
      <form onSubmit={handleSubmit}>
      <br></br>
      <br></br>
      <div className='Update-transparent'>
      <span className='Update'>UPDATE ! ! ! !</span>
      <div className='Carbon-Register'>
        <div className='Name-Comp'>Company Name : </div>
      <div className='Carbon-info'>
        <div className=' '> 
          <div className='Metric-div'>
          <input className='Limit1' placeholder='Limit of Carbon Emmission Designated to your Company ' type='text'   pattern="[0-9]*" required onChange={(event) => {
          setDesignated(event.target.value)
        }}/>
          <p className='Limit'>Metric ton </p>
          </div>
        </div>
      </div>
      <div className='Carbon-info1'>
          <div className='Metric-div'>
          <input className='Limit2' placeholder='Last Month Carbon Emission ' type='text' required onChange={(event) => {
          setLastMonth(event.target.value)
        }}/>
          <span className='Limit'>Metric ton </span>
          </div>

          <div className='Metric-div'>
          <input className='Limit2' placeholder='This Month Carbon Emmission ' type='text' required onChange={(event) => {
          setThisMonth(event.target.value)
        }}/>
          <span className='Limit'>Metric ton </span>
          </div>
      </div>
      <div className='Carbon-credits'>
        <span className='Credits' onChange={(event)=>
        {
          setCarbonCredits(event.target.value)
        }}>
          Carbon Credits = {lastMonth-thisMonth}
        </span>
      </div>
      <div className='Submit-btn'>
      <button type='Submit' className='Submit1'>Submit</button>
      </div>
      </div>
      </div>
      </form>
    </motion.div>
  )
}

export default CarbonUpdate