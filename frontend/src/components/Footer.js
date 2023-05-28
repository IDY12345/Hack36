import React from 'react'
import './Footer.css'

function Footer() {
  return (

    <footer class="footer-distributed">
    
          <div class="footer-left">
    
            <h3>Company<span>logo</span></h3>
    
            <p class="footer-links">
              <a href="#" class="link-1">HOME</a>
              
              <a href="#">INFO</a>
            
              <a href="#">ABOUT</a>
            
              <a href="#">TEAM</a>
              
              <a href="#"></a>
              
              <a href="#">CONTACT</a>
            </p>
    
            <p class="footer-company-name">Company Name © 2023</p>
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
              <p><a href="mailto:support@company.com">abc@company.com</a></p>
            </div>
    
          </div>
    
          <div class="footer-right">
    
            <p class="footer-company-about">
              <span>About the company</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>
    
            <div class="footer-icons">
    
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
              <a href="#"><i class="fa fa-github"></i></a>
    
            </div>
    
          </div>
    
        </footer>
  )
}

export default Footer