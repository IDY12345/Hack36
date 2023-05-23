import React, { useState, useEffect } from 'react'
import './About1.css'
function About1() {

    const [borderChange, setBorderChange] = useState(false)
    const [borderChange1, setBorderChange1] = useState(false)
    const [borderChange2, setBorderChange2] = useState(false)



    const changeBorder = () => {
        if (window.scrollY >= 400) {
            setBorderChange(true)
        }

        if (window.scrollY >= 600) {
            setBorderChange(false)
            setBorderChange1(true)
            setBorderChange2(true)
        }

        if (window.scrollY >= 800) {
            setBorderChange(true)
            setBorderChange1(false)
            setBorderChange2(true)
        }

        if (window.scrollY >= 1100) {
            setBorderChange1(true)
            setBorderChange2(false)
        }
        // else
        // {
        //     setBorderChange(false)
        // }
    }

    useEffect(() => {
        changeBorder()

        window.addEventListener("scroll", changeBorder)
    }, [])

    return (
        <div className='About1'>
            <img src="Assets\Group 2.png" alt='' />
        </div>
    )
}

export default About1