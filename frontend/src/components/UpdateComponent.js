import React,{useState} from 'react'
import { addDoc, getDocs, doc, collection, getFirestore } from 'firebase/firestore'
import { app } from '../firebase';
import { ethers } from "ethers"
import { Link, useNavigate } from 'react-router-dom';
import './UpdateComponent.css'
function UpdateComponent() {
    const navigate=useNavigate()
    const [last, setlast] = useState(0)
    const [now, setNow] = useState(0)
    const [updated, setUpdated] = useState(0)
    const [error, setError] = useState(false)
    const db = getFirestore(app);
    const updateRef = collection(db, "Update")

    const handleOffset = async (e) => {
        const date = new Date()
        e.preventDefault()
        if (last.length === 0 && now.length === 0) {
            setError(true);
        }

        if (last && now) {
            const docRef1 = await addDoc(updateRef, { last, now, date })
            console.log(last,now,updated)
        }
    }
  return (
    <form>
    <div className='Carbon-Credits-Update'>
        <h2 className='CCU'>Carbon Credits Update</h2>
        <div className='Input-Flex'>
        <div className='LMCE'>
            <h3>Last Month Carbon Emission</h3>
            <input placeholder='Last Month Carbon Emission'required className='LMCE-Input' onChange={(event)=>
            {
                setlast(event.target.value)
            }}/>
        </div>
        <div className='TMCE'>
            <h3>This Month Carbon Emission</h3>
            <input placeholder='This Month Carbon Emission' required className='LMCE-Input' onChange={(event)=>
            {
                setNow(event.target.value)
            }}/>
        </div>
        </div>
        <div className='Carbon-Credits-Info-Profile'>
            <p className='CCCCC'>Carbon Credits =</p>
            <p className='Zero'>{last-now}</p>
            <img src='Assets\carbon_credits1-removebg-preview1.png' alt='' width={30} height={30} className='CC-LOGO'/>
            
        </div>
        <button className='Update-btn'>Update</button>
    </div>
    </form>
  )
}

export default UpdateComponent