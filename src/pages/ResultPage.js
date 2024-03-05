import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MovieData from '../Components/MovieData'
import { useData } from '../context/DataContext'
import SmallNavbar from '../Components/SmallNavbar'

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
                <SmallNavbar/>
                <MovieData pagination={true} page={page}  setPage= {setPage}  urlSearch={url}  isSearch={true}  title={`Search Results for "${querryState}"`}  />
    </div>
    </>
  )
}
export default ResultPage