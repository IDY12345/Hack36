import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Navbar.css'
import AnimatedRoutes from '../AnimatedRoutes'
import { ConnectButton } from "web3uikit"

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
            <div className='Logo-Navigation'>
              <div className='Logo-Nav'>
                <img src='Assets\logo3.png' class="Logo" alt="" />
                <button className='Logo-btn'>Pioneers</button>
              </div>
              <div className='Navigation-Tools'>
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
                <div className="Home" title='Home'>
                  {!isAuth ? (<></>) : (
                    <Link to="/Home" className="Home-btn-link"><button class="Home-btn">Home</button></Link>
                  )}
                </div>
                <div className="About" title='About'>
                  <Link to="/">
                    <button className="About-btn">About</button>
                  </Link>
                </div>
                <div className="Login" title='Login'>
                  {isAuth ? (<></>) : (
                    <Link to="/SignIn"><button className="SignIn-btn">Login</button></Link>
                  )}
                </div>
                <div >
                  {isAuth ? (<></>) : (
                    <Link to="/SignUp"><button className='SignIn-btn'>Sign Up</button></Link>
                  )}
                </div>
                <ConnectButton />
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
        </nav>
        <AnimatedRoutes setIsAuth={setIsAuth} isAuth={isAuth} />
      </Router>
    </div>
  )
}

export default Navbar