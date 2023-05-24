import { ethers } from 'ethers'
import './Sign.css'
import React, { useState, useEffect } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase"
import {app} from "../firebase"
import './Register.css';
import { addDoc,setDoc ,doc, getDocs} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'

// const firebaseConfig = {
//     apiKey: "AIzaSyBU4EKHBp5L7GTOl7eCDVqMYed_ZMA99QA",
//     authDomain: "hack36-83483.firebaseapp.com",
//     projectId: "hack36-83483",
//     storageBucket: "hack36-83483.appspot.com",
//     messagingSenderId: "568739059463",
//     appId: "1:568739059463:web:cf5878aa066dd2fd2517a2",
//     measurementId: "G-843SRHH96X"
// };
// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// const provider = new ethers.providers.Web3Provider(window.ethereum)
// const signer = provider.getSigner()
// const message = "You agree to login with your mask "



// async function handleLogin() {

//     if (!window.ethereum) {
//         window.alert("Please add a wallet")
//         return
//     }
//     try {
//         const signature = await signer.signMessage(message)
//         const wallet_address = await signer.getAddress()
//         const q = await query(collection(db, "user_signup",), where("signature", "==", signature.toString()));
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//             const user = [];
//             querySnapshot.forEach((doc) => {
//                 user.push(doc.data());
//             });
//             if (user.length === 0) {
//                 window.alert("No user exist")
//             }
//             else {
//                 const db_address = ethers.utils.verifyMessage(message, user[0].signature)
//                 if (db_address === wallet_address) {
//                     window.alert("Logged In")
//                 }
//             }
//         });
//     } catch (error) {
//         console.log(error)
//     }


// }



function Login({ setIsAuth, isAuth,setUserRegistered}) {
    const [userList, setUserList] = useState([])

    const db = getFirestore(app);
    const RegisterCompanyRef = collection(db, "Register Company")

    useEffect(() => {
        if (isAuth) {
            navigate("/Home")
        }

        const RegisteredCompanies=async()=>
        {
          const data=await getDocs(RegisterCompanyRef);
          setUserList(data.docs.map((doc)=>(
          {
            ...doc.data(),id:doc.id
          })))
        }
        RegisteredCompanies();
    
         
    }, [])



    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    

    const message = "You agree to login with your mask "


    const navigate = useNavigate()
    async function handleLogin() {
        if (!window.ethereum) {
            window.alert("Please add a wallet")
            return
        }
        try {
            const signature = await signer.signMessage(message)
            const wallet_address = await signer.getAddress()
            const q = await query(collection(db, "user_signup",), where("signature", "==", signature.toString()));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const user = [];
                querySnapshot.forEach((doc) => {
                    user.push(doc.data());
                });
                if (user.length === 0) {
                    window.alert("No user exist")
                }
                else {
                    const db_address = ethers.utils.verifyMessage(message, user[0].signature)
                    if (db_address === wallet_address) {
                        localStorage.setItem("isAuth", true);
                        setIsAuth(true);
                        console.log(isAuth)

                        userList.map((user1)=>
                        {
                          if(user1.account1===wallet_address)
                          {
                            navigate("/Home")
                            console.log(true)
                            setUserRegistered(true)
                          }
                          else
                          {
                            navigate("/Register")
                          }
                        })
                        window.alert("Logged In")
                        // navigate("/Register")
                        console.log(wallet_address)
                        return wallet_address
                    }
                }
            });
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className='Login-meta'>
                <button onClick={handleLogin} className='Login-button'>Login with wallet</button>
            </div>
        </div>
    )
}

export default Login