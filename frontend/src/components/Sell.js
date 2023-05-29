import React ,{ useEffect,useState } from 'react'
import { getDocs, doc, collection, getFirestore, getDoc } from 'firebase/firestore'
import { app } from '../firebase';
import { ethers } from "ethers"
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, setDoc } from "firebase/firestore";
import './Sell.css'
function Sell() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const [sellList, setSellList] = useState([])
    const [SellName, setSellName] = useState("")
    const [carbonSell, setCarbonSell] = useState("")
    const [carbonPrice, setCarbonPrice] = useState("")
    const [error, setError] = useState(false)
    const navigate=useNavigate();
    const db=getFirestore(app)
    const sellRef=collection(db,"Register Company")
    const SellDocRef=collection(db,"Sell");
    useEffect(() => {
      
    const SellPosts=async()=>
    {
        const data=await getDocs(sellRef)
        setSellList(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    };
  
    SellPosts();

    const Selling=async()=>
    {
        const accounts=await provider.listAccounts()
        const account_address=accounts[0]
        sellList.map((selling)=>
        {
            const account=selling.account1
            if(account===account_address)
            {
                console.log("wallet_address : ",account_address)
                console.log(account)
                setSellName(selling.companyName)
            }
        })
    }

    Selling();
    }, )
    


    const handleSell=async(e)=>
    {
        e.preventDefault()
        const accounts = await provider.listAccounts();
        const account1 = accounts[0]
        setCarbonPrice(carbonSell*0.01)
        if(carbonPrice.length===0 && carbonSell.length===0 && SellName.length===0 && account1.length===0)
        {
            setError(true)
        }
        
        if(carbonPrice && carbonSell && SellName && account1)
        {
        const RefDocSell = await addDoc(SellDocRef,{carbonPrice,carbonSell,account1,SellName})
        navigate("/")
        window.alert("Adding Your Selling Issue To The Carbon Echange Panel",carbonSell)
        console.log(carbonSell,carbonPrice,SellName,account1)
        }
    }
  return (
<form onSubmit={handleSell}>
    <div className='Sell-Page'>
        <h1 className='SCC'>Sell Carbon Credits</h1>
        
        <div className='Card'>
            <div className='Card-Header'>
                <div className='Selling-Company-Name'><p className='Sell-Company-Name-Paragraph'>{SellName}</p></div>
                <div className='BCC-Sell'><p>Balance Carbon Credits = 1000</p>
                <img src='Assets\carbon_credits1-removebg-preview1.png' alt='' className='CC-Sell-Image-Header'/>
                </div>
            </div>
            
            <div className='Card-Body'>
                <h2 className='ENOCCYWTS'>Enter No.of Carbon Credits You Want To Sell</h2>
                <div className='Sell-Input-div'>
                    <input className='Sell-Input' placeholder='1000' required onChange={(event)=>
                    {
                        setCarbonSell(event.target.value)
                    }}/>
                    <img src='Assets\carbon_credits1-removebg-preview1.png' alt='' className='CC-Sell-Image'/>
                </div>
            </div>
            <button className='Sell-Button-Body'>Sell</button>
            
        </div>
        
    </div>
    </form>
  )
}

export default Sell