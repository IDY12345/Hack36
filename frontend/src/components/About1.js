import React,{useState,useEffect} from 'react'
import './About1.css'
function About1() {

    const [borderChange, setBorderChange] = useState(false)
    const [borderChange1, setBorderChange1] = useState(false)
    const [borderChange2, setBorderChange2]=useState(false)



    const changeBorder=()=>
    {
        if(window.scrollY>=400 )
        {
            setBorderChange(true)
        }

        if(window.scrollY>=600)
        {
            setBorderChange(false)
            setBorderChange1(true)
            setBorderChange2(true)
        }

        if(window.scrollY>=800)
        {
            setBorderChange(true)
            setBorderChange1(false)
            setBorderChange2(true)
        }
        
        if(window.scrollY>=1100)
        {
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
    
      window.addEventListener("scroll",changeBorder)
    }, [])
    
  return (
    <div className='About1'>
        <p className={borderChange ? 'About-Info':'About-Info active'}>
        We at Pioneers give you a chance to present your Startup on our Platform.
        Here Investors have a chance to invest via our platform.</p>
        <p className={borderChange1 ? 'About-Info1' : 'About-Info1 active'}>We basically provide a platform for all the startups to list thier idea 
            and take investments from the investors all over the world.</p>
        <p className={borderChange2 ? 'About-Info' : 'About-Info active'}>
            We Provide a video conferencing feature where the investors 
            and company's founder can discuss about the company and its vision.
        </p>
    </div>
  )
}

export default About1