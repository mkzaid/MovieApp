import React, { useEffect, useRef, useState } from 'react';
import './searchBar.css';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
  const navigate = useNavigate();
  const [querryState, setQuerry] = useState('')
  const [ isSearch , setIsSearch] =useState(false);
  let url = `https://api.themoviedb.org/3/search/movie?query=${querryState}&api_key=eb8243911afceb1b5cc7d67399a4e07b`
   const options={
          method:'GET',
          header:{
            accept:'application/json'
            // Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjgyNDM5MTFhZmNlYjFiNWNjN2Q2NzM5OWE0ZTA3YiIsInN1YiI6IjY1Y2I3MjBiMWMwOWZiMDE4MjM4YTFhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9J_RqxFNdaKFt6A34JxC_bR_KMoZhqUeNlfP3CWivsc'
          }
  }
  const querry = useRef(null)
   const handleChange = ()=>{
    navigate("/search")
      let value = encodeURIComponent(querry.current.value)
      setQuerry(value)
   }
   
  useEffect(()=>{
    const searchQuerry = async()=>{
             const res = await fetch(url,options)
             const json = await res.json()
           setIsSearch(true)
    } 
    searchQuerry();
  },[querryState])



  return (

    <div className='searchBar' >
        <div className="container">
        <svg id='searchIcon'  xmlns="http://www.w3.org/2000/svg" fill='black' height='1.3rem' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        <input type="text" placeholder='Enter Keywords...' ref={querry} onClick={handleChange} />
        <button id='searchBtn' onClick={handleChange} >
        <svg xmlns="http://www.w3.org/2000/svg" fill='white'  height='1.8rem'  viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </button>

        </div>
    </div>
 )

}

export default SearchBar
