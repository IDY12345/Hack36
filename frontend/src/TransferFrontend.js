import React from 'react'
import { ethers } from 'ethers';
import { abi } from './Abi.js';
function TransferFrontend() {
    const contractAddress = "0x831049d3eC5D52BC7171E40FeCEfB4Cf23db02ec"
    const _abi = abi
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, _abi, signer);
    const handlesetProductPrice = async () => {
        await contract.setProductPrice(10)
        console.log("Success")
    }
    return (
        <div>
            <button onClick={handlesetProductPrice}>Set Product Price</button>
        </div>
    )
}

export default TransferFrontend
