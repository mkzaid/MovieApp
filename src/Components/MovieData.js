
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import Pagination from './Pagination';

const MovieData = () => {

  const [data, setData] = useState([])
  const [page , setPage] = useState(1)
  useEffect(() => {
    fetchingData();

  }, [page])
  const fetchingData = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&limit=10&sort_by=popularity.desc`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjgyNDM5MTFhZmNlYjFiNWNjN2Q2NzM5OWE0ZTA3YiIsInN1YiI6IjY1Y2I3MjBiMWMwOWZiMDE4MjM4YTFhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9J_RqxFNdaKFt6A34JxC_bR_KMoZhqUeNlfP3CWivsc'
      }
    };
      const res = await fetch(url, options)
      if(res.status===200){

        // console.log(res.status);
        const json = await res.json()
        //  console.log(json.results[0])
        setData(json.results);
        // setimgUrl(json.results[0].poster_path)
      }
  }
  return (

    <>
    <div style={{marginTop:'5rem'}} >

        <Pagination   page = {page} setPage = {setPage} />
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
