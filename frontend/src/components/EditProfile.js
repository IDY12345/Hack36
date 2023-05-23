import React, { useEffect, useState } from 'react'
import { getDocs, doc, collection, getFirestore } from 'firebase/firestore'
import { app } from '../firebase';
import { ethers } from "ethers"
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, setDoc } from "firebase/firestore";
import './EditProfile.css'
import UpdateComponent from './UpdateComponent';

function EditProfile({isAuth}) {
  const [postList, setPostList] = useState("")
  const [last, setLast] = useState(0)
  const [first, setFirst] = useState(0)
  const [updated, setUpdated] = useState(0)
  const db = getFirestore(app);
  const docRef = collection(db, "Register Company");

  const updateRef = collection(db, "Update")
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {

      if (!isAuth) {
          navigate("/SignIn")
      }



      const getPosts = async () => {
          const data = await getDocs(docRef);
          setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

      getPosts();


  })

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const accounts = provider.listAccounts();
  const account1 = accounts[0]

  return (
    <form>
      <div className= 'Profile-Outer1'  >
          <div className='Profile-Inner1'>
              <div className='Panel-Flex1'>
                  <div className='Profile-Photo-Panel1'>
                      <div className='Profile-Image1'>
                          <img src='' alt='' />
                      </div>
                      <h3 className='Establishment-Date1'>Since 1999</h3>
                      <button className='Edit-Button-Profile1'>Save Changes</button>
                  </div>
                  <div className='Profile-Pro-Flex1'>
                  <div className='Profile-Name1'>
                      <h2 className='Profile-H21'>E D I T - P R O F I L E</h2>
                  </div>
                  <div className='Details1'>
                  <div className='Basic1'>
                      <h2 className='Basic-Detail1'>Basics : </h2>
                      <p className='Name-of-the-company1'>Name of the Company</p>
                      <div className='Name-Box-11'>Name Of The Company</div>
                      <p className='Name-of-the-company1'>Owner of the Company</p>
                      <div className='Name-Box-11'>Owner Of The Company</div>
                      <p className='Name-of-the-company1'>E-Mail address</p>
                      <input className='Name-Box1' placeholder='xyz@123' />
                      <p className='Name-of-the-company1'>Contact</p>
                      <input className='Name-Box1' placeholder='952XXXXX23' />
                  </div>
                  <div className='Social-Links1'>
                      <div className='Social-Links-Pro1'>
                      <h2>Social-Panel</h2>
                      <p className='Name-of-the-company1'>Website Link of the Company</p>
                      <input className='Name-Box1' placeholder='https://website.com' />
                      <p className='Name-of-the-company1'>Twitter Profile:</p>
                      <input className='Name-Box1' placeholder='Profile-Username' />
                      <p className='Name-of-the-company1'>LinkedIn Profile:</p>
                      <input className='Name-Box1' placeholder='Profile-Username' />
                      </div>
                  </div>
                  </div>
                  <UpdateComponent />
                  </div>
                  
              </div>
              
          </div>
          
      </div>
      </form>
)}

export default EditProfile