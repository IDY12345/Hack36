import React, { useEffect, useState } from 'react'
import { getDocs, doc, collection, getFirestore, getDoc } from 'firebase/firestore'
import { app } from '../firebase';
import { ethers } from "ethers"
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, setDoc } from "firebase/firestore";
import './Profile.css'
import UpdateComponent from './UpdateComponent';
function Profile({ isAuth }) {
    const [postList, setPostList] = useState([])
    const [last, setLast] = useState(0)
    const [first, setFirst] = useState(0)
    const [updated, setUpdated] = useState(0)
    const db = getFirestore(app);
    const docRef = collection(db, "Register Company");
    const updateRef = collection(db, "Update")
    const [error, setError] = useState(false)
    const [id, setId] = useState("")
    const navigate = useNavigate()
    const [NAME, setNAME] = useState("")
    const [companyName, setcompanyName] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [web, setWeb] = useState("")
    const [twitter, setTwitter] = useState("")
    const [linkedIn, setLinkedIn] = useState("")
    // let account_address="";
    let id1=""

    useEffect(() => {

        if (!isAuth) {
            navigate("/SignIn")
        }

        const getPosts = async () => {
            const data = await getDocs(docRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getPosts();


        // const getRegistered=async()=>    {
        // const docRef1=doc(db,"Register Company",{id})

        // const docSnap=await getDoc(docRef1)
    
        //     if(docSnap.exists())
        //     {
        //     console.log(docSnap.data())
        // }
        // else
        // {
        //     console.log("No Such Document Exists")
        // }
        // }

        // getRegistered();
        
        // const usersRegFun=async()=>
        // {
        //     const account=await provider.listAccounts()
        //     account_address=accounts[0]
        //     postList.map((user1)=>
        //     {
        //         if(user1.account1===account)
        //         {
        //             setId(user1.id)
        //         }
        //     })
        // }
        // usersRegFun();

        // console.log(docSnap.data())

        const Posting=async()=>
        {
            const accounts=await provider.listAccounts()
           const account_address=accounts[0]
        postList.map((posts)=>
        {
            const account=posts.account1
            if(account===account_address)
            {
                console.log(posts.account1)
                console.log("wallet_address : " ,account_address)
                setcompanyName(posts.companyName)
                setName(posts.name)
                setEmail(posts.email)
                setContact(posts.contact)
                setWeb(posts.webLink)
                setTwitter(posts.twitter)
                setLinkedIn(posts.linkedin)
            }
        })
    }
    Posting();
    })

    

    const handleOffset = async (e) => {
        const date = new Date()
        e.preventDefault()
        if (last.length === 0 && first.length === 0 && updated.length === 0) {
            setError(true);
        }

        if (last && first && updated) {
            const docRef1 = await addDoc(updateRef, { last, first, updated, date })
            navigate("/Home")
        }
    }



   
    const [sell, setSell] = useState(false)

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const accounts = provider.listAccounts();
    const account1 = accounts[0]
    //   postList.map((post)=>
    //   {
    //     if(post.account1===account1)
    //     {
    //         console.log(post.account1)
    //     }
    //   })





    return (
        <div className={sell ? 'Profile-Outer active' : 'Profile-Outer'} >
            <div className='Profile-Inner'>
                <div className='Panel-Flex'>
                    <div className='Profile-Photo-Panel'>
                        <div className='Profile-Image'>
                            <img src='' alt='' />
                        </div>
                        <h3 className='Establishment-Date'>Since 1999</h3>
                        <button className='Edit-Button-Profile'>Edit Profile</button>
                        <div className='Total-Carbon-Credits'>
                            <p className='BCC'>Balance Carbon Credits</p>
                            <div className='Number-CC'>
                                <p className='CC-Total'>1000</p>
                                <img src='Assets\carbon_credits1-removebg-preview1.png' alt='' width={30} height={30} className='CN-Logo' />
                            </div>
                        </div>
                        <div className='ETW'>
                            <p className='BCC'>
                                Ethereum in your wallet
                            </p>
                            <div className='Number-CC'>
                                <p className='CC-Total'>1000</p>
                                <p className='Eth'>Eth</p>
                            </div>
                        </div>
                        <div className='ETW1'>
                            <p className='BCC'>
                                Sell Carbon Credits
                            </p>
                           <Link to="/Sell"><button className='CN-btn'>Sell</button></Link> 
                        </div>
                    </div>
                    <div className='Profile-Pro-Flex'>
                    <div className='Profile-Name'>
                        <h2 className='Profile-H2'>P R O F I L E</h2>
                    </div>
                    <div className='Details'>
                    <div className='Basic'>
                        <h2 className='Basic-Detail'>Basics : </h2>
                        <p className='Name-of-the-company'>Name of the Company</p>
                        <div className='Name-Box'>{companyName}</div>
                        <p className='Name-of-the-company'>Owner of the Company</p>
                        <div className='Name-Box'>{name}</div>
                        <p className='Name-of-the-company'>E-Mail address</p>
                        <div className='Name-Box'>{email}</div>
                        <p className='Name-of-the-company'>Contact</p>
                        <div className='Name-Box'>{contact}</div>
                    </div>
                    <div className='Social-Links'>
                        <div className='Social-Links-Pro'>
                        <h2>Social-Panel</h2>
                        <p className='Name-of-the-company'>Website Link of the Company</p>
                        <div className='Name-Box'>{web}</div>
                        <p className='Name-of-the-company'>Twitter Profile:</p>
                        <div className='Name-Box'>{twitter}</div>
                        <p className='Name-of-the-company'>LinkedIn Profile:</p>
                        <div className='Name-Box'>{linkedIn}</div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile