import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const NavList = () => {

  return (
    <div >

      <ul className='navLinks' >
        <Link className='navLink' to='/' >Home</Link>
        <Link className='navLink' to='/'>Genre</Link>
        <Link className='navLink' to='/' >Country</Link>
        <Link className='navLink' to='/' >Movies</Link>
        <Link className='navLink' to='/' >TV Shows</Link>
        <Link className='navLink' to='/' >Top IMDB</Link>
            </ul>
    </div>

  )
}

export default NavList