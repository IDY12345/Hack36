import React, { useState } from 'react'
import { ethers } from 'ethers';
import { abi } from '../Abi.js';
import './BuyPanel.css'


function BuyPanel() {
  const [quantity, setQuantity] = useState(0)
  const contractAddress = "0x831049d3eC5D52BC7171E40FeCEfB4Cf23db02ec"
  const _abi = abi
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(contractAddress, _abi, signer);
  const handleTransfer = async () => {
    await contract.buyProduct(quantity)
    window.alert("Transaction successful")

  }
  return (
    <div >
      <p>Name of Green Organization : (Fetch from DB)</p>
      <p>Public Address of the green Organization : (fetch from DB)</p>
      <p>Price of one carbon credit : Fetch from DB</p>
      <br />
      <input placeholder='Quantity of Carbon credits' onChange={(e) => { setQuantity(e.target.value) }}></input>
      <button onClick={handleTransfer}>Buy Carbon Credits </button>
    </div>
  );
}

export default BuyPanel