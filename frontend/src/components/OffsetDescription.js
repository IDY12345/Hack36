import React from 'react'
import VideoChat from '../VideoChat'
import VideoChatIcon from '@mui/icons-material/VideoChat';
import "./OffsetDescription.css"
import { Link } from 'react-router-dom';
function OffsetDescription() {
  return (

    <>
      <div className='VideoChatIcon'>
        <Link to="/VideoChat">
          <VideoChatIcon style={{ fontSize: "70px" }} />
        </Link>

      </div>

      <div>OffsetDescription</div>
    </>

  )
}

export default OffsetDescription