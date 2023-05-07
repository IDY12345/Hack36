
import React from 'react'
import { ethers } from "ethers"
import { Chat } from "@pushprotocol/uiweb";
import * as PushAPI from "@pushprotocol/restapi"




async function userGenerator() {
    const user = await PushAPI.user.create({
        account: '0x4C6C922a1044Bb6840B926BBD461A1DCff40bd1B'
    });
    console.log(user)
}


function Chat1() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const wallet_address = signer.getAddress()
    return (

        < div >

            <>
                <Chat
                    account="0x4C6C922a1044Bb6840B926BBD461A1DCff40bd1B" //user address             
                    supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d" //support address      
                />
            </>
        </div >
    )
}

export default Chat1