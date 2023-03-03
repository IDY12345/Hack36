import React from 'react'
import './Sidebar.css'
import { Link,BrowserRouter as Router } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className='Sidebar-Nav'>
            <Link to="/Register"><button className='Register-btn'>Register Company</button></Link>
        </div>
    </div>
  )
}

export default Sidebar