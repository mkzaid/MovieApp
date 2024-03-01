import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../img/logo.png'
import NavList from '../Components/NavList'

import MovieData from '../Components/MovieData'
import { useData } from '../context/DataContext'

const ResultPage = () => {
 const navigate = useNavigate();
 const {querryState} = useData();
  let value = encodeURIComponent(querryState)
  const [page , setPage] = useState(1)
  const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=${page}`;     
    //  Further Functionality
    useEffect(()=>{
      if(querryState==="")
             navigate("/")
    },[navigate, querryState])
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
                <MovieData pagination={true} page={page}  setPage= {setPage}  urlSearch={url}  isSearch={true}  title={`Search Results for "${querryState}"`}  />
    </div>
    </>
  )
}
export default ResultPage