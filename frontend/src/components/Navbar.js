import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Navbar.css'
import AnimatedRoutes from '../AnimatedRoutes'


function Navbar({ setIsAuth, isAuth }) {

  const signUserOut = () => {
    localStorage.clear();
    setIsAuth(false);
    window.location.pathname = "/SignIn";
  }

  console.log(isAuth)
  return (
    <div>
      <Router>

        <nav>
          <div className="Navbar">
            <div className='Navbar-transparent'>
              <div className='Logo-Navigation'>
                <div className='Logo-Nav'>
                  <img src='Assets\logo3.png' class="Logo" alt="" />
                  <button className='Logo-btn'>PIONEERS</button>
                </div>
                <div className='Navigation-Tools'>
                  <div className="About" title='About'>
                    <Link to="/">
                      <button className="About-btn">About</button>
                    </Link>
                  </div>
                  <div className='Home'>
                    <Link to="/Climate">
                      <button className='Home-btn'>Climate Information</button>
                    </Link>
                  </div>
                  <div className='Home'>
                    <Link to="/CarbonCredits">
                      <button className='Home-btn'>Carbon Credits</button>
                    </Link>
                  </div>
                  {
                    !isAuth ? (<></>) : (
                      <div className='Services' title='Services'>
                        <button className='Services-btn'>
                          Services <i class="fa fa-caret-down" aria-hidden="true" id='drop'></i>
                        </button>

                        <div className="Services-Content">
                          <Link to="/Register"><button className="Service1">Register Company</button></Link>
                          <Link to="/Offset"><button className="Service2">Green Organisation Registration</button></Link>
                        </div>
                      </div>
                    )}
                  {!isAuth ? (<></>) : (
                    <div className="Home" title='Home'>
                      <Link to="/Home" className="Home-btn-link"><button class="Home-btn">Home</button></Link>
                    </div>
                  )}

                  {isAuth ? (<></>) : (
                    <div className="Login" title='Login'>
                      <Link to="/SignIn"><button className="SignIn-btn">Login</button></Link>
                    </div>
                  )}
                  {isAuth ? (<></>) : (
                    <div className='Login'>
                      <Link to="/SignUp"><button className='SignIn-btn'>Sign Up</button></Link>
                    </div>
                  )}
                  {!isAuth ? (<></>) : (
                    <div className='Profile' >
                      <button className='Profile-btn' title='Profile'><i class="fa-solid fa-user"></i></button>
                      <div className='Profile-Content'>
                        <Link to="/Profile"><button className='Profile1'>Profile</button></Link>
                        <Link to="/Edit-Profile"><button className='Profile2'>Edit Profile</button></Link>
                        <Link to="/CarbonUpdate"><button className='Profile3'>Carbon Credits Update</button></Link>
                        <Link to="/SignIn"><button className='Profile4' onClick={signUserOut}>Logout</button></Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className='Nav-Info'>
                <p className='The'>The</p> <p className='The'>One</p>    <p className='The'>Stop</p>    <p className='The'>Destination</p>     <p className='The'>For</p>     <p className='The'>All</p>    <p className='The'>Carbon</p>    <p className='The'>Trades.</p>
              </div>
            </div>
          </div>
        </nav>
        <AnimatedRoutes setIsAuth={setIsAuth} isAuth={isAuth} />
      </Router>
    </div>
  )
}

export default Navbar