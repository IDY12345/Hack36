import React,{useState,useEffect} from 'react'
import './Offset.css'
function Offset() {
  const handleSubmit=()=>
  {

  }
  return (
    <div className='Offset'>
      <h2 className='Green'>Green Organization Registration</h2>
      <div className='Offset-info'>
        <div>
          <input type='text' placeholder='Company Name' className='Offset-Name' />
        </div>
        <div>
          <input type='text' placeholder='Product Name' className='Offset-Name' />
        </div>
      </div>
      <div className='Offset-info'>
        <textarea placeholder='Product Description' className='Offset-Name1' />
      </div>
      <div className=''>
        <div className='Product-Cost'>
          <p className='Price'>Cost = </p>
          <div>
            <input className='Cost' placeholder="99.9" type='integer' />
          </div>
          <p className='Price'>Eth</p>
        </div>
      </div>
      <div className='Offset-info1'>
        <p className='Price'>Carbon Emission Reduction compared to other similar products</p>
        <div className='Offset-info2'>
          <input placeholder='10000' className='Cost' type='text' />
          <p className='Price'>Metric ton</p>
        </div>
      </div>
      <div className='Submit-btn1'>
        <button type='Submit' className='Submit1' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Offset