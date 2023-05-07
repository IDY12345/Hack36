import { useHuddle01 } from '@huddle01/react';
import { useEffect } from 'react';
import { useLobby, useAudio, useVideo, useRoom, usePeers } from '@huddle01/react/hooks';
import { Audio, Video } from '@huddle01/react/components';
import React from 'react'
import axios from 'axios'

// fetching the roomId
let response;
axios.post(
    'https://iriko.testing.huddle01.com/api/v1/create-room',
    {
        title: 'Huddle01-Test',
        hostWallets: ['0x4C6C922a1044Bb6840B926BBD461A1DCff40bd1B'],
    },
    {

        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'VwTZ4AGTxme9snANex9tep3NwvVMGfYd',
        },
    }
).then(res => {
    console.log("axios res " + res.data)
    response = res.data.data.roomId
}).catch((e) => {
    console.log(e)
})


function Huddle() {
    const peers = usePeers();
    const { peerIds } = usePeers();
    const { initialize, isInitialized, meId } = useHuddle01();
    const { joinLobby } = useLobby();
    const { fetchAudioStream, stopAudioStream, error: micError, produceAudio, stopProducingAudio, stream: audioStream } = useAudio();
    const { fetchVideoStream, stopVideoStream, error: camError, produceVideo, stopProducingVideo, stream: videoStream } = useVideo();
    const { joinRoom, leaveRoom } = useRoom();

    useEffect(() => {
        // its preferable to use env vars to store projectId
        if (!isInitialized)
            initialize('KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR');
    }, []);

    return (
        <>

            <div>
                {isInitialized ? <div>Room Intialized</div> : <div>Room not Intialized</div>}
                {/* <button onClick={() => { initialize("KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR", ) }}>Init</button> */}
            </div>
            <button
                disabled={!joinLobby.isCallable}
                onClick={() => joinLobby(response)}> Join Lobby </button>
            {/* Mic */}
            <button disabled={!fetchAudioStream.isCallable} onClick={fetchAudioStream}>
                FETCH_AUDIO_STREAM
            </button>

            {/* Webcam */}
            <button disabled={!fetchVideoStream.isCallable} onClick={fetchVideoStream}>
                FETCH_VIDEO_STREAM
            </button>


            <button disabled={!joinRoom.isCallable} onClick={joinRoom}>
                JOIN_ROOM
            </button>

            <button disabled={!leaveRoom.isCallable} onClick={leaveRoom}>
                LEAVE_ROOM
            </button>
            <button disabled={!produceVideo.isCallable} onClick={() => produceVideo(videoStream)}>
                Produce Cam
            </button>

            <button disabled={!produceAudio.isCallable} onClick={() => produceAudio(audioStream)}>
                Produce Mic
            </button>
            <button disabled={!stopProducingVideo.isCallable} onClick={stopProducingVideo}>
                Stop Producing Cam
            </button>

            <button disabled={!stopProducingAudio.isCallable} onClick={stopProducingAudio}>
                Stop Producing Mic
            </button>
            <Video peerId={meId} />
            <Audio peerId={meId} />

        </>

    )
}

export default Huddle


