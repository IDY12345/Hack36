import React from 'react'
import './Sell.css'
function Sell() {
  return (
    <div className='Sell-Page'>
        <h1 className='SCC'>Sell Carbon Credits</h1>
        <div className='Card'>
            <div className='Card-Header'>
                <div className='Selling-Company-Name'>Company Name</div>
                <div className='BCC-Sell'><p>Balance Carbon Credits = 1000</p>
                <img src='Assets\carbon_credits1-removebg-preview1.png' alt='' className='CC-Sell-Image-Header'/>
                </div>
            </div>
            <div className='Card-Body'>
                <h2 className='ENOCCYWTS'>Enter No.of Carbon Credits You Want To Sell</h2>
                <div className='Sell-Input-div'>
                    <input className='Sell-Input' placeholder='1000'/>
                    <img src='Assets\carbon_credits1-removebg-preview1.png' alt='' className='CC-Sell-Image'/>
                </div>
            </div>
            <button className='Sell-Button-Body'>Sell</button>
        </div>
    </div>
  )
}

export default Sell