
import React from 'react'
import { ethers } from "ethers"
import * as PushApi from "@pushprotocol/restapi"
import { Chat } from "@pushprotocol/uiweb";

function Chat() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    return (
        <div>

            <>
                <Chat
                    account="0x5cA3d0a2815531A33C1D1aaF41337C3A1fB1B8a1" //user address  (Sender)            
                    supportAddress="0x4C6C922a1044Bb6840B926BBD461A1DCff40bd1B" //support address (receiver)         
                />
            </>
        </div>
    )
}

export default Chat