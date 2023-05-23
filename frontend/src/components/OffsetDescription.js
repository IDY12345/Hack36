import React from 'react'
import VideoChat from '../VideoChat'
import VideoChatIcon from '@mui/icons-material/VideoChat';
import "./OffsetDescription.css"
import { Link } from 'react-router-dom';
function OffsetDescription() {

  const DateFunc = () => {
    const date1 = new Date().getDate()
    const date2 = new Date().getDate()

    const diff = date1 - date2;
    console.log(diff)
  }

  return (

    <>
      <div>
        <div className='Description-Box'>
          <div className='Navigation-Panel'>
            <div className='Company-Panel'><p className='Company-Name-Panel'>Company Name</p></div>
            <div className='Company-Panel'>
              ishaanyeole123@gmail.com
              7770012715
            </div>
            <div className='Company-Panel2'>
              <div className='VideoChatIcon'>
                <Link to="/VideoChat">
                  <i class="fa-solid fa-video"></i>
                </Link>
              </div></div>
            <div className='Company-Panel2'>
              <div className='VideoChatIcon'>
                <i class="fas fa-comment-dots"></i>
              </div>
            </div>
          </div>
          <div className='Description-Flex'>
            <div className='Product-Image'></div>
            <div className='Product-Description-Description'>
            <p className='Product-Name-Description'>
              Product Name
            </p>
            <p className='Description-Description'>Description</p>
            <p className='Cost-Description'>Cost = 10 Eth</p>
            <button className='Buy-Now-Description'>Buy Now</button>
            </div>
            
          </div>
          
        </div>
        <button onClick={DateFunc}>Date</button>
      </div>

    </>

  )
}

export default OffsetDescription