import React from 'react'
import "./SwapPage.css"
function SwapPage() {
  return (
    <div className='Swap-Page'>
        <div className='Image-Flex'>
        <img src='Assets\Group 32.png' alt='' className='Ethereum-Image'/>
        <img src='Assets\Group 31.png' alt='' className='Carbon-Diffused-Image'/>
        </div>
        <div className='Swap-Button-Div'>
            <a href='https://pioneers240203.netlify.app'><button className='Swap-Button'>Swap Token</button></a>
        </div>
        <div>
        <p className='Purple'>Swap Carbon Credits</p>
        <p className='Purple-Yellow'>& Wrapped Ether</p>
        <p className='Yellow'>With Confidence</p>
        </div>
    </div>
  )
}

export default SwapPage