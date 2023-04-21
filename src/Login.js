import { ethers } from 'ethers'
import React from 'react'

async function handleLogin() {
    if (!window.ethereum) {
        window.alert("Please add a wallet")
        return
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const message = "You agree to login with your mask "
    const signature = await signer.signMessage(message)
    const address = ethers.utils.verifyMessage(message, signature)
    console.log(address)
}
function Login() {

    handleLogin()

    return (
        <div>
            <button onClick={handleLogin}>Login with wallet</button>
        </div>
    )
}

export default Login
