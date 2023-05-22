import React, { useEffect, useState } from 'react'
import './About.css'
import Footer from './Footer';
import About1 from './About1';
import Info from './Info';
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
            <div>
                <div>
                    <div className={colourChange ? 'Back-div' : 'Back-div active'}>
                        <div className={colourChange ? 'Image-div' : 'Image-div active'}>
                            <div className='Display-Order'>
                                <img src='Assets\logo-black2.png' className='About-Image' alt="" />
                                <h1 className='Name-Company'>Pioneers</h1>
                            </div>
                            <p className={colourChange ? 'presents' : 'presents active'}>Carbon Credit Marketplace</p>
                        </div>
                    </div>
                    <About1 />
                </div>
                <Info />
            </div>
        </div>

    )
}

export default About