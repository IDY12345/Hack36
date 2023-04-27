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
            <div className='Logo-Nav'>
              <Link to="/">
                {/* <img src='Assets\logo2.png' class="Logo" alt="" /> */}
                <button className="Logo">
                  <h1>Pioneers</h1>
                </button>
              </Link>
            </div>
            <div className="Home" title='Home'>
              <Link to="/Home" className="Home-btn-link"><button class="Home-btn"><i class="fa-solid fa-house"></i></button></Link>
            </div>
            <div className="About" title='About'>
              <Link to="/">
                <button className="About-btn"><i className="fa-solid fa-circle-info"></i></button>
              </Link>
            </div>
            <div className="Login">
              <button className="Login-btn">
                <i className="fas fa-sign-in-alt"></i>
              </button>
              <div className="Login-Content">
                <Link to="/SignIn"><button className="SignIn-btn">Login</button></Link>
                <Link to="/SignUp"><button className="SignUp-btn">SignUp</button></Link>
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