import { useHuddle01 } from '@huddle01/react';
import { useEffect } from 'react';
import { useLobby } from '@huddle01/react/hooks';
import React from 'react'
import axios from 'axios'

// fetching the roomId

function Huddle() {
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
        console.log(res.data)
        response = res.data.data.roomId
    }).catch((e) => {
        console.log(e)
    })

    const { initialize, isInitialized } = useHuddle01();
    const { joinLobby } = useLobby();

    useEffect(() => {
        initialize("KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR");
    }, [])


    return (
        <>
            <div>{isInitialized ? 'Hello World!' : 'Please initialize'}</div>;
            <button
                // disabled={joinLobby.isCallable}
                onClick={() => joinLobby(response)}> Join Lobby </button>
        </>

    )
}

export default Huddle


