import React, { useState,useEffect } from 'react'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage,db } from "../firebase.js";
import { v4 } from "uuid";
import './Register.css';
import {addDoc,collection} from "firebase/firestore";
function RegisterCompany() {
  const [companyName, setCompanyName] = useState("");
  const [establishment, setEstablishment] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyConatct,setCompanyContact]=useState("");
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [contact,setContact]=useState("");
  const [email,setEmail]=useState("");
  // const RegisterCompanyRef=collection(db,"")
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [ url]);
      });
    });
  };
  useEffect(() => {

    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const handleSubmit=async()=>
  {
    // await addDoc(RegisterCompanyRef,{companyName,companyEmail,companyConatct,establishment,name,contact,email,DOB})
    console.log(`Company Name:${companyName},Contact:${companyConatct},email:${companyEmail},establishment: ${establishment}`);
  }
 return (
 <div className='Register'>
      <h1 className='Register-Inner'>Register Company</h1>
      <div className='Basic-Details'>
        <h2 className='Basic'>Basics Details</h2>
        <div className='Company-Info'>
          <div>
            <h3>Company Name</h3>
            <input type='text' placeholder='Company-Name' required className='Company-Name' onChange={(event)=>
            {
              setCompanyName(event.target.value)
            }} />
          </div>
          <div>
            <h3>Establishment Date</h3>
            <input type='date' placeholder='Establishment-Date' required className='Company-Name' onChange={(event)=>
            {
              setEstablishment(event.target.value)
            }} />
          </div>
        </div>
      </div>
      <div className='Company-Info'>
        <div>
          <h3>Company Email</h3>
          <input type='email' placeholder='Company Email' required className='Company-Name' onChange={(event)=>
          {
            setCompanyEmail(event.target.value)
          }} />
        </div>
        <div>
          <h3>Company Contact </h3>
          <input type='text' placeholder='9999999999' required className='Company-Name' maxLength={10} onChange={(event)=>
          {
            setCompanyContact(event.target.value)
          }} />
        </div>
      </div>
      <div className='Company-Info1'>
      <h3>CIN Number :  </h3>
          <input type='text' placeholder='L12345MH2010KRD010234' required className='Company-Name' maxLength={21} onChange={(event)=>
          {
          
          }} />
      </div>
      <div className='Company-Info2'>
        <div>
          <h3>A brief description (Minimum 100 characters)</h3>
          <textarea type='description' placeholder='A brief description' required className='Description' minLength={100} />
        </div>
      </div>
      <div className='Company-Info2'>
        <div>
          <h3>Vision of the Company</h3>
          <textarea type='description' placeholder='Vision' required className='Description' maxLength={500} />
        </div>
      </div>
      <div className='Owner'>
        <h2>Owner Details</h2>
      </div>
      <div className='Company-Info'>
        <div>
          <h3>Owner Name</h3>
          <input type='text' placeholder='Owner-Name' required className='Company-Name' onChange={(event)=>
          {
            setName(event.target.value)
          }} />
        </div>
        <div>
          <h3>Date of Birth</h3>
          <input type='date' placeholder='DOB' required className='Company-Name' onChange={(event)=>
          {
            setDOB(event.target.value)
          }} />
        </div>
      </div>
      <div className='Company-Info1'>
        <div className='Image-add'>
          <h3>Email</h3>
          <input type='email' placeholder='Email' required className='Company-Name' onChange={(event)=>
          {
            setEmail(event.target.value)
          }} />
        </div>
      </div>
      <div className='Company-Info1'>
        <div className='Image-add'>
          <h3>Contact</h3>
          <input type='text' placeholder='9876543210' required className='Company-Name' maxLength={10} onChange={(event)=>
          {
            setContact(event.target.value)
          }} />
        </div>
      </div>
      <div className='Submit-btn'>
        <button type='Submit' className='Submit' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default RegisterCompany