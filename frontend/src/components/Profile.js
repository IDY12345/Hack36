import React, { useEffect, useState } from 'react'
import { getDocs, doc, collection, getFirestore } from 'firebase/firestore'
import { app } from '../firebase';
import { ethers } from "ethers"
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css'
function Profile({ isAuth }) {
    const [postList, setPostList] = useState("")
    const [last, setLast] = useState(0)
    const [first, setFirst] = useState(0)
    const [updated, setUpdated] = useState(0)
    const db = getFirestore(app);
    const docRef = collection(db, "Register Company");
    const navigate = useNavigate()
    useEffect(() => {

        // if (!isAuth) {
        //     navigate("/SignIn")
        // }

        const getPosts = async () => {
            const data = await getDocs(docRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getPosts();


    })
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
        <div className={sell ? 'Profile-Outer active' : 'Profile-Outer'}>
            <div className='Profile-Inner'>
                <div className='Line-Top'>

                </div>
                <h1 className='Profile-Pro'>P R O F I L E</h1>
                <div>
                    <div className='Circle'>

                    </div>
                    <h2 className='Company-Profile'>Company Name</h2>

                    <h3 className='Since'>Since ....</h3>
                    <Link to="/Edit-Profile">
                        <button className='Edit-Profile-Pro'>
                            Edit Profile
                        </button>
                    </Link>

                    <div className='Total-Carbon-Credits'>
                        <div className='Balance-Carbon-Credits'>
                            <p className='BCS'>Balance Carbon Credits</p>
                            <div className='Credit-Number'>
                                <p className='CN'>1000<img src='Assets\carbon_credits1-removebg-preview1.png' alt='' width={50} height={30} className='CN-Logo' /></p>
                            </div>
                        </div>
                    </div>
                    <div className='Total-Ethereum'>
                        <div className='Balance-Carbon-Credits'>
                            <p className='BCS'>Ethereum in your wallet</p>
                            <div className='Credit-Number'>
                                <p className='CN'>1000 Eth</p>
                            </div>
                        </div>
                    </div>
                    <div className='Sell-Panel'>
                        <div className='Balance-Carbon-Credits'>
                            <p className='BCS1'>Sell Your Carbon Credits</p>
                            <div className='Credit-Number'>
                                <button className='CN-btn' onClick={() => {
                                    setSell(true);
                                    <div className='Sell-Box'>
                                        <div>
                                            Total Carbon Credit
                                        </div>
                                    </div>
                                }}>Sell</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Line'>

                </div>
                <div className='Details'>
                    <div className='Basics'>
                        <h2>Basics:</h2>
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
                        <h2>Social-Panel</h2>
                        <p className='Name-of-the-company'>Website Link of the Company</p>
                        <div className='Name-Box'>https://website.com</div>
                        <p className='Name-of-the-company'>Twitter Profile:</p>
                        <div className='Name-Box'>Profile Username</div>
                        <p className='Name-of-the-company'>LinkedIn Profile:</p>
                        <div className='Name-Box'>Profile Username</div>
                    </div>
                </div>
                <div className='Line1'>

                </div>

                <div className='Carbon-Credits-Update'>
                    <h2 className='CCU'>Carbon Credits Update</h2>
                </div>
                <div className='Last-Month'>
                    <p className='LMCE'>Last Month Carbon Emission [Dated....]</p>
                    <input className='Last' placeholder='Last Month Carbon Emission' onChange={(event) => {
                        setLast(event.target.value)
                    }} />
                </div>

                <div className='First-Month'>
                    <p className='LMCE'>This Month Carbon Emission [Dated....]</p>
                    <input className='Last' placeholder='This Month Carbon Emission' onChange={(event) => {
                        setFirst(event.target.value)
                    }} />
                </div>
                <div className='CC-Update'>
                    <h2 className='CC'>Carbon Credits = <span onChange={(event) => {
                        setUpdated(event.target.value)
                        console.log(updated)
                    }}>{last - first}</span></h2>
                    <img src='Assets\carbon_credits1-removebg-preview.png' alt='' width={50} height={50} className='Image' />
                </div>
                <div className='Update-Button-div'>
                    <button className='Update-Button'>Update</button>
                </div>
            </div>
        </div>
    )
}

export default Profile