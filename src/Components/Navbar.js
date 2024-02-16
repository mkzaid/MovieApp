import React from 'react'
import "./navbar.css"
import movieLogo from '../img/logo.png';
import NavList from './NavList';
const Navbar = () => {
  return (
    <div  id='navbar'  >
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
            <h1>Find Movies, TV shows and more</h1>
    </div>
  )
}

export default Navbar   