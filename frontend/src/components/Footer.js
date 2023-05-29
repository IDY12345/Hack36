import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (

    <footer class="footer-distributed">
    
          <div class="footer-left">
    
            <h3 className='Logo-Footer'><img src='Assets\logo3.png' alt='' width={100} height={100}/><span className='Pioneers-Footer'>PIONEERS</span></h3>
    
            <p class="footer-links">
              <a href="Home" class="link-1">HOME</a>
              
              <a href="CarbonCredits">INFO</a>
            
             <a href="/">ABOUT</a>
            
              <a href="Founders">TEAM</a>
              
              <a href="#"></a>
              
              <a href="SignIn">LOGIN</a>
            </p>
    
            <a href='/'><p class="footer-company-name">Pioneers © 2023</p></a>
          </div>
    
          <div class="footer-center">
    
            <div>
              <i class="fa fa-map-marker"></i>
              <p><span>DYPIEMR, Akurdi 423422</span> Pune,Maharashtra</p>
            </div>
    
            <div>
              <i class="fa fa-phone"></i>
              <p>+91 989353532534</p>
            </div>
    
            <div>
              <i class="fa fa-envelope"></i>
              <p><a href="mailto:support@company.com">pioneers010323@gmail.com</a></p>
            </div>
    
          </div>
    
          <div class="footer-right">
    
            <p class="footer-company-about">
              <span>About the company</span>
            <p className='Footer-Slogan'>The One Stop Destination For All Carbon Trades.</p>
            </p>
    
            <div class="footer-icons">
    
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
    
            </div>
    
          </div>
    
        </footer>
  )
}

export default Footer