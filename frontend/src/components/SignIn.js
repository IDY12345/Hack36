import { ethers } from 'ethers'
import './Sign.css'
import React ,{useState} from 'react'

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
    const [isAuth, setIsAuth] = useState(false)
    handleLogin()

    return (
        <div className='Login-meta'>
            <button onClick={handleLogin} className='Login-button'>Login with wallet</button>
        </div>
    )
}

export default Login