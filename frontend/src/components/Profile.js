import React, { useEffect, useState } from 'react'
import { getDocs, doc, collection, getFirestore } from 'firebase/firestore'
import { app } from '../firebase';
import { ethers } from "ethers"
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, setDoc } from "firebase/firestore";
import './Profile.css'
import UpdateComponent from './UpdateComponent';
function Profile({ isAuth }) {
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
                            <button className='CN-btn'>Sell</button>
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
                        <div className='Name-Box'>Name Of The Company</div>
                        <p className='Name-of-the-company'>Owner of the Company</p>
                        <div className='Name-Box'>Owner Of The Company</div>
                        <p className='Name-of-the-company'>E-Mail address</p>
                        <div className='Name-Box'>xyz@123.com</div>
                        <p className='Name-of-the-company'>Contact</p>
                        <div className='Name-Box'>985XXXXX89</div>
                    </div>
                    <div className='Social-Links'>
                        <div className='Social-Links-Pro'>
                        <h2>Social-Panel</h2>
                        <p className='Name-of-the-company'>Website Link of the Company</p>
                        <div className='Name-Box'>https://website.com</div>
                        <p className='Name-of-the-company'>Twitter Profile:</p>
                        <div className='Name-Box'>Profile Username</div>
                        <p className='Name-of-the-company'>LinkedIn Profile:</p>
                        <div className='Name-Box'>Profile Username</div>
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