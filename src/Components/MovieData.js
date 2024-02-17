
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { useData } from '../context/DataContext';

const MovieData = ({pagination, dataType, title , querryState ,isSearch,urlSearch }) => {
   const{fetchingData} = useData();
   const [data, setData] = useState([])

  const [page , setPage] = useState(1)
  
  let url = `https://api.themoviedb.org/3/movie/${dataType}?language=en-US&page=${page}`;
  useEffect(() => {
    if(isSearch){
      fetchingData(urlSearch , setData)
    }else{
      fetchingData(url , setData);
    }
  }, [page])
              console.log(querryState);
  return (

    <>
    <div style={{marginTop:'5rem'}} >

      <div className="titleDataComponent">
           <h1 style={{fontSize:'2rem' , fontWeight:'300', margin:'1rem 2rem' }} >
             {title}
           </h1>
      </div>

      { pagination && data.filter((item)=>item.poster_path!=null).length>19&& <Pagination   page = {page} setPage = {setPage} />}
      <div className='movieList' style={{
         display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
        
        margin: '0rem 1rem', justifyContent:'center'
        
      }} >
        {data.filter((item,ind)=>ind<18&&item.poster_path!=null ||item.known_for!=null ).map((movie) => {
          return <MovieCard imgUrl={movie.poster_path} movieName={movie.title} key={movie.id} movieDate={movie.release_date}  />
        })}
      </div>
    </div>
    </>

  )
}

export default MovieData
