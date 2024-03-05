import React from 'react'
import logo from '../img/logo.png'
import NavList from './NavList'

const SmallNavbar = () => {
  return (
    <div style={{width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#8e00ad',
    height:'11vh'
    }}  >
        <div className="logo">
           <img  style={{width:'7rem', marginLeft:'2rem' }} src={logo} alt="Reloading" />
        </div>
        <NavList/>
        <button style={{
             border:'none', width:'70px', height:'35px', background:'white', borderRadius:'10px',cursor:'pointer', marginRight:'3rem' 
        }} >Login</button>
  </div>
  )
}

export default SmallNavbar