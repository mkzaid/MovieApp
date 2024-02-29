import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import './navlist.css'
import { useData } from '../context/DataContext'
const NavList = () => {
 // const genreArr = [{id: 1,genre: 'Action'}, { id: 2,genre: 'Action'},{id: 3,genre: 'Action'},{id: 4,genre: 'Action'},{id: 5,genre: 'Action'}, {id: 6,genre: 'Action'},{id: 7,genre: 'Action'},{id: 8,genre: 'Action'},]
 const [ genres, setGenres] = useState([])
 const navigate = useNavigate()
 const [ classNameHover , setClassName] = useState("genreGrid")
 const {setQuerry, setResult} = useData()
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
    
   const handleClick = (genre)=>{
             setResult({
              search:false,
              genre:true,
              country:false
             })
             console.log(genre);
             setQuerry(genre)
         navigate("/search")    
   }

  return (
    <div >

      <ul className='navLinks' >
        <Link className='navLink' to='/' >Home</Link>
        <Link className='navLink' to='/' onMouseEnter={()=>setClassName("genreGrid show")}   >Genre</Link>
        <Link className='navLink' to='/' >Country</Link>
        <Link className='navLink' to='/' >Movies</Link>
        <Link className='navLink' to='/' >TV Shows</Link>
        <Link className='navLink' to='/' >Top IMDB</Link>
            <div className={classNameHover} onMouseLeave={()=>setClassName("genreGrid")} >
            {genres.map((genre,id)=>{
              return<li id={"item"+id} className='items' onClick={()=>handleClick(genre.name)} key={id} >{genre.name}</li>
            })}
            </div>
            </ul>
    </div>

  )
}

export default NavList