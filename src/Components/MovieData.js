
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { useData } from '../context/DataContext';

const MovieData = () => {
   const fetchingData = useData();
  const [data, setData] = useState([])
  const [page , setPage] = useState(1)
  useEffect(() => {

    fetchingData(page,setData);

  }, [page])
  
  return (

    <>
    <div style={{marginTop:'5rem'}} >

      { data.length>19&& <Pagination   page = {page} setPage = {setPage} />}
      <div className='movieList' style={{
         display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
        
        margin: '0rem 6rem', justifyContent:'space-around'
        
      }} >
        {data.map((movie) => {
          // console.log(movie);
          return <MovieCard imgUrl={movie.poster_path} movieName={movie.title} key={movie.id} movieDate={movie.release_date}  />

        })}
      </div>
    </div>
    </>

  )
}

export default MovieData
