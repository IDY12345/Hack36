import React, { useEffect, useState } from 'react'
import VideoChat from '../VideoChat'
import VideoChatIcon from '@mui/icons-material/VideoChat';
import "./OffsetDescription.css"
import { Link, useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../firebase';
import { ethers } from 'ethers';
import { abi } from '../Abi.js';

function OffsetDescription() {
  const [companyName, setCompanyName] = useState("")
  const [productName, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [cost, setCost] = useState(0)
  const [carbonReduction, setCarbonReduction] = useState(0)
  const { id } = useParams()
  const [quantity, setQuantity] = useState(0)

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
      setCarbonReduction(docSnap.data().carbonReduction)
      setCost(docSnap.data().cost)
      console.log(companyName)
    }

    getGreen();
  })
  const contractAddress = "0x831049d3eC5D52BC7171E40FeCEfB4Cf23db02ec"
  const _abi = abi
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(contractAddress, _abi, signer);

  const handleBuying = async () => {
    await contract.buyProduct()
  }

  return (
    <>
      <div>
        <div className='Description-Box'>
          <div className='Navigation-Panel'>
            <div className='Company-Panel'><p className='Company-Name-Panel'>{companyName}</p></div>
            <div className='Company-Panel'>
              <div className='Company-Name-Panel1'>
                <p>ishaanyeole123@gmail.com</p>
                <p>7770012715</p>
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
            <div className='Product-Image-div'>
              <div className='Product-Image'></div>
            </div>
            <div className='Product-Description-Description'>
              <p className='Product-Name-Description'>
                {productName}
              </p>
              <p className='Description-Description'>
                {description}
              </p>
              <p className='Carbon-Reduction-Paragraph'>
                Carbon Reduction =
                {carbonReduction} metric ton
              </p>
              <p className='Cost-Description'>Cost = {cost} Eth</p>
              <div style={{ display: "flex" }}>
                <p>Quantity of Carbon Credits : </p>
                <input className="quantity-input" onChange={(e) => { setQuantity(e.target.value) }} ></input>
              </div>
              <button className='Buy-Now-Description' onClick={handleBuying}>Buy Now</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OffsetDescription