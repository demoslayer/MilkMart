import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
     
        <p>DoorDairy</p>
     
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="nav-login">
{localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token',localStorage.removeItem('userId')); window.location.replace('/');}}>Logout</button>
:<Link to='/login'><button>Login</button></Link>}
      </div>



      
    </div>
  )
}

export default Navbar