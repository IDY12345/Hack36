import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Navbar.css'
import AnimatedRoutes from '../AnimatedRoutes'
function Navbar() {
    return (

        <div>
        <Router>
          <nav>
            <div class="Navbar">
              <div>
                <Link to="/">
                  <img src='Assets\logo2.png' class="Logo" alt="" />
                </Link>
              </div>
              <div class="Home" title='Home'>
                <Link to="/Home" class="Home-btn-link"><button class="Home-btn"><i class="fa-solid fa-house"></i></button></Link>
              </div>
              <div class="About" title='About'>
                <Link to="/">
                  <button class="About-btn"><i class="fa-solid fa-circle-info"></i></button>
                </Link>
              </div>
              <div class="Login">
                <button class="Login-btn">
                  <i class="fas fa-sign-in-alt"></i>
                </button>
                <div class="Login-Content">
                  <a ><Link to="/SignIn"><button class="SignIn-btn">Login</button></Link></a>
                  <a ><Link to="/SignUp"><button class="SignUp-btn">SignUp</button></Link></a>
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