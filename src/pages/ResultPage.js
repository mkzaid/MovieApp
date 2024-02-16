import React from 'react'
import logo from '../img/logo.png'
import NavList from '../Components/NavList'
const ResultPage = () => {
  return (
    <>
    <div>
             <div style={{width:'100%' 
             ,background:'linear-gradient(to top, #512affba, #6246d2cc), url("../img/joel-muniz-f86RSR2IlYw-unsplash.jpg")',
             display:'flex',
             flexDirection:'row',
             justifyContent:'space-between',
             alignItems:'center',
             height:'10vh'
             }}  >
                 <div className="logo">
                    <img  style={{width:'7rem', marginLeft:'2rem' }} src={logo} alt="Reloading" />
                 </div>
                 <NavList/>
                 <button style={{
                      border:'none', width:'70px', height:'35px', background:'white', borderRadius:'10px',cursor:'pointer', marginRight:'3rem' 
                 }} >Login</button>
                </div>   
    </div>
    </>
  )
}
export default ResultPage