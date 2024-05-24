import React , { useEffect, useState} from 'react'
import { Typography } from "@mui/material"
import "./css/navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import './css/navlinks.css'
const NavList = () => {
const [genres , setGenres] = useState([])
const navigate = useNavigate()
  useEffect(()=>{
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjgyNDM5MTFhZmNlYjFiNWNjN2Q2NzM5OWE0ZTA3YiIsInN1YiI6IjY1Y2I3MjBiMWMwOWZiMDE4MjM4YTFhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9J_RqxFNdaKFt6A34JxC_bR_KMoZhqUeNlfP3CWivsc'
      }
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => setGenres(json.genres))
      .catch(err => console.error('error:' + err));
  },[])
  const handleClick =(name)=>{
        //  navigate(`/genre/${name}`)
         navigate('/404')
  }
    

 console.log(genres);
  return (
    <div >

      <ul className='navLinks' >
        <Link className='navLink' to='/' >Home</Link>
        <div className='navLink hoverEffect '>
          Genre
        <div className="listContainer">
          {genres.map((gen,index)=><li  key={index} onClick={()=>{handleClick(gen.name)}} >{gen.name}</li>)}
        </div>
        </div>
        <Link className='navLink' to='/' >Country</Link>
        <Link className='navLink' to='/' >Movies</Link>
        <Link className='navLink' to='/' >TV Shows</Link>
        <Link className='navLink' to='/' >Top IMDB</Link>
            </ul>
    </div>

  )
}

export default NavList