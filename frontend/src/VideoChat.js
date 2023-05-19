import React from 'react'
import { HuddleIframe } from "@huddle01/huddle01-iframe";
import { Button } from '@mui/material';
import "./VideoChat.css"
import { Link } from 'react-router-dom';
const iframeConfig = {
    roomUrl: "https://iframe.huddle01.com",
    height: "700px",
    width: "100%",
    noBorder: true,
    position: "relative",
    left: "-100px",
    top: "-100px"
    // false by default
};
function VideoChat() {
    return (
        <div>
            <div className='Logo-Hide'></div>
            <HuddleIframe config={iframeConfig} style={{ position: "relative", left: "-100px", top: "-100px" }} />
            <div className='button-container'>
                <Link to="/Home"><Button variant="contained" color="error"> Return to home </Button></Link>
            </div>

        </div>
    )
}

export default VideoChat
