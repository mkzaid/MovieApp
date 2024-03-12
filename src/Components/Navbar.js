import React from 'react'
import "./css/navbar.css"
import movieLogo from '../img/logo.png';
import NavList from './NavList';
const Navbar = () => {
  return (
    <div  id='navbar'>
              <div className='navbar_elements' >
                    <div id='logo'>
                      <img   src={movieLogo} alt='logo'/>
                      </div>
                    <div id='list'><NavList/>
                    </div>
                    <div id='user'>
                      <button id="login">
                        login
                      </button>
                    </div>
            </div>
            <p>Find Movies, TV shows and more</p>
    </div>
  )
}

export default Navbar   