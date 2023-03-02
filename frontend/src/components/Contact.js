import React,{useState,useEffect} from 'react'
import './Contact.css'
function Contact() {
    const [bgChange, setBgChange] = useState(false)

    const Change=()=>
    {
        if(window.scrollY>=1100)
        {
            setBgChange(true)
        }

        else
        {
            setBgChange(false)
        }
    }

    useEffect(() => {
      Change()
    
      window.addEventListener("scroll",Change)
    }, [])
    
  return (
    <div className='Contact'>
        <div className={bgChange?'Founder active':'Founder'}>
            <h3>Founder 1</h3>
            <p>Ishaan Yeole</p>
            <p>Email : ishaanyeole123@gmail.com</p>
            <p className='Mobile'>Mobile : 7770012715</p>
            <p>Github : </p>
            <p>Linkedin : </p>
            <p>Intsagram : </p>
        </div>
        <div className={bgChange?'Founder active':'Founder'}>
            <h3>Founder 2</h3>
            <p>Bhavyapratap Singh</p>
            <p>Email : bhavyapratapsingh240203@gmail.com</p>
            <p className='Mobile'>Mobile : 9569218829</p>
            <p>Github : </p>
            <p>Linkedin : </p>
            <p>Intsagram : </p>
        </div>
        <div className={bgChange?'Founder active':'Founder'}>
            <h3>Founder 3</h3>
            <p>Ninad Trivedi</p>
            <p>Email : -</p>
            <p className='Mobile'>Mobile : 9054994854</p>
            <p>Github : </p>
            <p>Linkedin : </p>
            <p>Intsagram : </p>
        </div>
        <div className={bgChange?'Founder active':'Founder'}>
            <h3>Founder 4</h3>
            <p>Samruddhi Nimbalkar</p>
            <p>Email : samruddhinimbalkar3@gmail.com</p>
            <p className='Mobile'>Mobile : 9309114848</p>
            <p>Github : </p>
            <p>Linkedin : </p>
            <p>Intsagram : </p>
        </div>
    </div>
  )
}

export default Contact