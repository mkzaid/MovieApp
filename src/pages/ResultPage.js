import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MovieData from '../Components/MovieData'
import { useData } from '../context/DataContext'
import SmallNavbar from '../Components/SmallNavbar'
import Footer from '../Components/Footer'

const ResultPage = () => {
 const navigate = useNavigate();
 const {genreType} = useParams();
 const {querryState} = useData();
 let title = `Search Results for "${querryState}"`
  let value = encodeURIComponent(querryState)
  const [page , setPage] = useState(1)
  const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=${page}`;     
    //  Further Functionality
    useEffect(()=>{
      if(!genreType){
        if(querryState==="")
        navigate("/")
    }else{
 title=genreType
    }
    },[navigate, querryState])
  return (
    <>
    <div>
                <SmallNavbar/>
                <MovieData pagination={true} page={page}  setPage= {setPage}  url={url}  title={title}  />
                <Footer/>
    </div>
    </>
  )
}
export default ResultPage