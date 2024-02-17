import React, { useContext, useEffect } from 'react'
import logo from '../img/logo.png'
import NavList from '../Components/NavList'

import MovieData from '../Components/MovieData'

const ResultPage = ({querryState}) => {

  let value = encodeURIComponent(querryState)

  const url = `https://api.themoviedb.org/3/search/multi?query=${value}&include_adult=false&language=en-US&page=1`;
     
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
                <MovieData pagination={true} dataType={'popular'} urlSearch={url}  isSearch={true} querry = {querryState} title={`Search Results for "${querryState}"`}  />
    </div>
    </>
  )
}
export default ResultPage