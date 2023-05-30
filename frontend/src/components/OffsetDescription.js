import React, { useEffect, useState } from 'react'
import VideoChat from '../VideoChat'
import VideoChatIcon from '@mui/icons-material/VideoChat';
import "./OffsetDescription.css"
import { Link, useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../firebase';
function OffsetDescription() {
  const [companyName, setCompanyName] = useState("")
  const [productName, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [cost, setCost] = useState(0)
  const { id } = useParams()

  const DateFunc = () => {
    const date1 = new Date().getDate()
    const date2 = new Date().getDate()

    const diff = date1 - date2;
    console.log(diff)
  }

  const db = getFirestore(app)

  useEffect(() => {


    const getGreen = async () => {
      const docRef = doc(db, "Green", id);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data())
      setCompanyName(docSnap.data().companyName)
      setProductName(docSnap.data().productName)
      setDescription(docSnap.data().description)
      setCost(docSnap.data().cost)
      console.log(companyName)
    }

    getGreen();
  })



  return (
    <>
      <div>
        <div className='Description-Box'>
          <div className='Navigation-Panel'>
            <div className='Company-Panel'><p className='Company-Name-Panel'>{companyName}</p></div>
            <div className='Company-Panel'>
              <div className='Company-Name-Panel1'>
                ishaanyeole123@gmail.com
                7770012715
              </div>
            </div>
            <div className='Company-Panel2'>
              <div className='VideoChatIcon'>
                <i class="fas fa-comment-dots"></i>
              </div></div>
            <div className='Company-Panel2'>
              <div className='VideoChatIcon'>
                <Link to="/VideoChat">
                  <i class="fa-solid fa-video"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className='Description-Flex'>
            <div className='Product-Image'></div>
            <div className='Product-Description-Description'>
              <p className='Product-Name-Description'>
                {productName}
              </p>
              <p className='Description-Description'>
                {description}
              </p>
              <p className='Cost-Description'>Cost = {cost} Eth</p>
              <button className='Buy-Now-Description'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OffsetDescription