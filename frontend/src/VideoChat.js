import React from 'react'
import { HuddleIframe } from "@huddle01/huddle01-iframe";
const iframeConfig = {
    roomUrl: "https://iframe.huddle01.com",
    height: "600px",
    width: "80%",
    noBorder: true,
    position: "relative",
    left: "-100px",
    top: "-100px"
    // false by default
};
function VideoChat() {
    return (
        <div>
            <HuddleIframe config={iframeConfig} style={{ position: "relative", left: "-100px", top: "-100px" }} />
        </div>
    )
}

export default VideoChat
