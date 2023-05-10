import { ethers } from 'ethers'
import './Sign.css'
import React, { useState, useEffect } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase"
import { useNavigate } from 'react-router-dom';

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



function Login({ setIsAuth, isAuth }) {

    useEffect(() => {
        if (isAuth) {
            navigate("/Home")
        }
    }, [])

    const firebaseConfig = {
        apiKey: "AIzaSyBU4EKHBp5L7GTOl7eCDVqMYed_ZMA99QA",
        authDomain: "hack36-83483.firebaseapp.com",
        projectId: "hack36-83483",
        storageBucket: "hack36-83483.appspot.com",
        messagingSenderId: "568739059463",
        appId: "1:568739059463:web:cf5878aa066dd2fd2517a2",
        measurementId: "G-843SRHH96X"
    };
    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);
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
                        navigate("/Home")
                        window.alert("Logged In")
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
        <div className='Login-meta'>
            <button onClick={handleLogin} className='Login-button'>Login with wallet</button>
        </div>
    )
}

export default Login