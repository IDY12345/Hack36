import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Navbar.css'
import AnimatedRoutes from '../AnimatedRoutes'

function Navbar() {

  return (
    <div>
      <Router>

        <nav>
          <div className="Navbar">
            <div className='Logo-Navigation'>
              <div className='Logo-Nav'>
                <img src='Assets\logo3.png' class="Logo" alt="" />
                <button className='Logo-btn'>Pioneers</button>
              </div>
            </div>
            <div className='Navigation-Tools'>
              <div className='Services' title='Services'>
                <button className='Services-btn'>
                  Services <i class="fa fa-caret-down" aria-hidden="true" id='drop'></i>
                </button>
                <div className="Services-Content">
                  <Link to="/Register"><button className="Service1">Register Company</button></Link>
                  <Link to="/Offset"><button className="Service2">Green Organisation Registration</button></Link>
                  <Link to="/CarbonUpdate"><button className="Service3">Carbon Credits Update</button></Link>
                </div>
              </div>
              <div className="Home" title='Home'>
                <Link to="/Home" className="Home-btn-link"><button class="Home-btn">Home</button></Link>
              </div>
              <div className="About" title='About'>
                <Link to="/">
                  <button className="About-btn">About</button>
                </Link>
              </div>
              <div className="Login" title='Login'>
                <Link to="/SignIn"><button className="SignIn-btn">Login</button></Link>
              </div>

            </div>
          </div>
        </nav>
        <AnimatedRoutes />
      </Router>
    </div>
  )
}

export default Navbar