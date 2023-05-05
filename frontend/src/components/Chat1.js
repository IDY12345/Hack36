
import React from 'react'
import { ethers } from "ethers"
import { Chat } from "@pushprotocol/uiweb";


// async function fetchAccountAddress() {
//     const provider = await new ethers.providers.Web3Provider(window.ethereum)
//     const signer = provider.getSigner()
//     const wallet_address = await signer.getAddress()
//     return wallet_address
// }

function Chat1() {

    return (

        <div>

            <>
                <Chat
                    account="0x5cA3d0a2815531A33C1D1aaF41337C3A1fB1B8a1"//user address  (Sender)            
                    supportAddress="0x5cA3d0a2815531A33C1D1aaF41337C3A1fB1B8a1" //support address (receiver)         
                />
            </>
        </div>
    )
}

export default Chat1