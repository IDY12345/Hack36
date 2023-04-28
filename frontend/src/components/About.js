import React, { useEffect, useState } from 'react'
import './About.css'
import About1 from './About1';
import Contact from './Contact';
import Branch from './Branch';

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
        <div className='Contact-About'>
            <div className={colourChange ? 'Back-div' : 'Back-div active'}>
                <div className={colourChange ? 'Image-div' : 'Image-div active'}>
                    <img src='Assets\logo1.png' className='About-Image' alt="" />
                    <p className='presents'>Presents</p>
                </div>
                <About1 />                
            </div>
            <Contact />
        </div>
        <Branch />
        </div>
    )
}

export default About