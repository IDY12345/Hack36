import React, { useEffect, useState } from 'react'
import './About.css'
import Footer from './Footer';

function About() {
    const [colourChange, setColourChange] = useState(false)

    const backgroundChange = () => {
        if (window.scrollY >= 75) {
            setColourChange(true);
        }
        else {
            setColourChange(false)
        }
    }

    useEffect(() => {
        backgroundChange()

        window.addEventListener("scroll", backgroundChange)
    }, [])

    return (
        <div className='Branch'>
            <div className={colourChange ? 'Back-div' : 'Back-div active'}>
                <div className={colourChange ? 'Image-div' : 'Image-div active'}>
                    <img src='Assets\logo1.png' className='About-Image' alt="" />
                    <p className={colourChange?'presents':'presents active'}>Carbon Credit Marketplace</p>
                </div>         
            </div>
            <Footer />
        </div>

    )
}

export default About