import React, { useState, useEffect } from 'react'
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   list,
// } from "firebase/storage";
import axios from 'axios'
import { ethers } from "ethers"
import { app } from "../firebase.js";
// import { v4 } from "uuid";
import './Register.css';
import { addDoc, collection, getFirestore,setDoc ,doc, getDocs} from "firebase/firestore";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { response } from 'express';
function RegisterCompany({isAuth,userRegistered,setUserRegistered}) {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const wallet_address = signer.getAddress();
  // const wall=w_a;
  const db = getFirestore(app)
  const [companyName, setCompanyName] = useState("");
  const [establishment, setEstablishment] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyConatct, setCompanyContact] = useState(0);
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [contact, setContact] = useState(0);
  const [email, setEmail] = useState("");
  const [CIN, setCIN] = useState("")
  const [webLink, setWebLink] = useState("")
  const [twitter, setTwitter] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [error, setError] = useState(false)
  const RegisterCompanyRef = collection(db, "Register Company")
  const [errorName, setErrorName] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate("/SignIn")
    }
  },[])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await provider.listAccounts();
    const account1 = accounts[0]
    const date = new Date()
    console.log(account1)
    const options = {
      method: 'POST',
      url: 'https://mca-corporate-verifications1.p.rapidapi.com/MCA/Detailed_search',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '4335290962msha7a7b91d666684bp1652ccjsnf92e4eee5a05',
        'X-RapidAPI-Host': 'mca-corporate-verifications1.p.rapidapi.com'
      },
      data: {
        method: 'CINvalidate',
        txn_id: '609f5942-9c57-4f45-8b61-6baf76c86d54',
        clientid: 'RapidAPI_MCA',
        cin: CIN.toString()
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      if (response.data.Failed) {
        window.alert("Entered CIN ID is Invalid")
      }
      else {
        if (companyName.length === 0 && establishment.length === 0 && companyEmail.length === 0 && companyConatct.length === 0 && CIN.length === 0 && name.length === 0 && DOB.length === 0 && contact.length === 0 && email.length === 0 && webLink.length === 0 && twitter.length === 0 && linkedin.length === 0 ) {
          setError(true);
        }
        window.alert("Success")
      }
    } catch (error) {
      console.error(error);
    }

    if (companyName && establishment && companyEmail && companyConatct && CIN && name && DOB && contact && email && webLink && twitter && linkedin) {
      const docRef = await addDoc(RegisterCompanyRef, { companyName, companyEmail, companyConatct, establishment, name, contact, email, DOB, account1, date, webLink, linkedin, twitter })
      console.log(`Company Name:${companyName},Contact:${companyConatct},email:${companyEmail},establishment: ${establishment},CIN:${CIN} DocRef:${docRef.id}`);
      setUserRegistered(true);
      navigate("/Home")
    }
  } 

  return (
    <motion.div className='Register' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      {!userRegistered?(
      <form onSubmit={handleSubmit}>
        <br></br>
        <br></br>
        <br></br>
        <div className={'Register-transparent'}>
          <div className='Register-absolute'>
            <br></br>
            <div className='Register-Company-Title'>
              <h2 className='Register-Inner'>Register Company</h2>
            </div>
            <div className='Basic-Details'>
              <h2 className='Basic'>Basics-Details : </h2>
            </div>
            <div className='Register-Company-Name'>
              <h3 className='Company-Name-Title'>Company Name<span className='Star'>*</span></h3>
              <input type='text' placeholder='Company-Name' required className='Company-Name' onChange={(event) => {
                setCompanyName(event.target.value)
                setErrorName(true)
              }} />
            </div>
            <div className='Register-Company-Name'>
              <h3 className='Company-Name-Title'>Establishment Date<span className='Star'>*</span></h3>
              <input type='date' placeholder='Establishment-Date' required className='Company-Name' onChange={(event) => {
                setEstablishment(event.target.value)
              }} />
            </div>
            <div className='Register-Company-Name'>
              <h3 className='Company-Name-Title'>Company Email<span className='Star'>*</span></h3>
              <input type='email' placeholder='Company Email' required className='Company-Name' onChange={(event) => {
                setCompanyEmail(event.target.value)
              }} />
            </div>
            <div className='Register-Company-Name'>
              <h3 className='Company-Name-Title'>Company Contact<span className='Star'>*</span></h3>
              <input type='tel' placeholder='9999999999' required className='Company-Name' maxLength={10} onChange={(event) => {
                setCompanyContact(event.target.value)
              }} />
            </div>
            <div className='Register-Company-Name'>
              <h3 className='Company-Name-Title'>CIN Number<span className='Star'>*</span></h3>
              <input type='text' placeholder='L12345MH2010KRD010234' required className='CIN' minLength={21} maxLength={21} onChange={(event) => {
                setCIN(event.target.value)
              }} />
            </div>

            <div className='Owner-Name-Details'>
              <div className='Basic-Details'>
                <h2 className='Basic'>Owner-Details : </h2>
              </div>
              <div className='Register-Company-Name'>
                <h3 className='Company-Name-Title'>Owner Name<span className='Star'>*</span></h3>
                <input type='text' placeholder='Owner-Name' required className='Company-Name' onChange={(event) => {
                  setName(event.target.value)
                }} />
              </div>
              <div className='Register-Company-Name'>
                <h3 className='Company-Name-Title'>Date of Birth<span className='Star'>*</span></h3>
                <input type='date' placeholder='DOB' required className='Company-Name' onChange={(event) => {
                  setDOB(event.target.value)
                }} />
              </div>
              <div className='Register-Company-Name'>
                <h3 className='Company-Name-Title'>Owner's Email<span className='Star'>*</span></h3>
                <input type='email' placeholder='Email' required className='Company-Name' onChange={(event) => {
                  setEmail(event.target.value)
                }} />
              </div>
              <div className='Register-Company-Name'>
                <h3 className='Company-Name-Title'>Owners's Contact<span className='Star'>*</span></h3>
                <input type='text' placeholder='9876543210' required className='Company-Name' maxLength={10} onChange={(event) => {
                  setContact(event.target.value)
                }} />
              </div>
            </div>
            <div className='Social-Media-Company'>
              <div className='Basic-Details'>
                <h2 className='Basic'>Links : </h2>
              </div>
              <div className='Register-Company-Name'>
                <h3 className='Company-Name-Title'>Website Link of the Company<span className='Star'>*</span></h3>
                <input type='text' placeholder='https://website.com' required className='Company-Name' onChange={(event) => {
                  setWebLink(event.target.value)
                }} />
              </div>
              <div className='Register-Company-Name'>
                <h3 className='Company-Name-Title'>Twitter Profile<span className='Star'>*</span></h3>
                <input type='Link' placeholder='Profile-Username' required className='Company-Name' onChange={(event) => {
                  setTwitter(event.target.value)
                }} />
              </div>
              <div className='Register-Company-Name'>
                <h3 className='Company-Name-Title'>Linked-In Profile<span className='Star'>*</span></h3>
                <input type='Link' placeholder='Profile-Username' required className='Company-Name' maxLength={10} onChange={(event) => {
                  setLinkedin(event.target.value)
                }} />
              </div>
            </div>

            <div className='Submit-btn'>
              <button type='Submit' className='Submit'>Submit</button>
            </div>
          </div>

          <br></br>

        </div>
      </form>
      ):(<><h1>You Have Already Registered Your Company</h1></>)}
    </motion.div>
  )
}

export default RegisterCompany