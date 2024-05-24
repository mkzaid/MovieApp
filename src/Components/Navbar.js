import React from 'react'
import "./css/navbar.css"
import { Typography } from "@mui/material"
import movieLogo from '../img/logo.png';
import NavList from './NavList';
const Navbar = () => {
  return (
    <div  id='navbar'>
              <div className='navbar_elements' >
                    <div id='logo'>
                      <img   src={movieLogo} alt='logo'/>
                      </div>
                    <div><NavList/>
                    </div>
                      <button id="login">
                      <Typography variant='body1' >Login</Typography>
                      </button>
            </div>
            <Typography variant='h4' color="white" mt={3} textAlign='center' fontSize={40} component='p' letterSpacing={1}  >Find Movies, TV shows and more</Typography>
    </div>
  )
}

export default Navbar   