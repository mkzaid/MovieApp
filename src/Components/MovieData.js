
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { useData } from '../context/DataContext';

const MovieData = ({pagination, dataType, title , querryState ,isSearch,urlSearch , page, setPage }) => {
  //Fetching Data Calling Function from context
   const{fetchingData} = useData();
  //  Defining States
   const [data, setData] = useState([])
   const [totalPages, setTotalPages] = useState(1)
  //Defining Variable
  let url = `https://api.themoviedb.org/3/movie/${dataType}?language=en-US&page=1`;
  //Other Hooks
  useEffect(() => {
    if(isSearch){
      fetchingData(urlSearch , setData, setTotalPages)
    }else{
      fetchingData(url , setData , setTotalPages);
    }
  }, [page])
  // Rest of the Logic / Functionality
  return (

    <>
    <div style={{marginTop:'5rem'}} >

      <div className="titleDataComponent">
           <h1 style={{fontSize:'2rem' , fontWeight:'300', margin:'1rem 2rem' }} >
             {title}
           </h1>
      </div>

      { pagination && <Pagination  totalPage={totalPages}   page = {page} setPage = {setPage} />}
      <div className='movieList' style={{
         display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
        
        margin: '0rem 1rem 0rem 2.2rem',
        
      }} >
        { data.filter((item,ind)=>ind<18).map((movie) => {
          return <MovieCard imgUrl={movie.poster_path} movieName={movie.title} key={movie.id} movieDate={movie.release_date}  />
        })}
      </div>
    </div>
    </>

  )
}

export default MovieData
