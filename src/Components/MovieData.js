
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const MovieData = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    fetchingData();

  }, [])
  const fetchingData = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjgyNDM5MTFhZmNlYjFiNWNjN2Q2NzM5OWE0ZTA3YiIsInN1YiI6IjY1Y2I3MjBiMWMwOWZiMDE4MjM4YTFhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9J_RqxFNdaKFt6A34JxC_bR_KMoZhqUeNlfP3CWivsc'
      }
    };
      const res = await fetch(url, options)
      if(res.status===200){

        console.log(res.status);
        const json = await res.json()
        //  console.log(json.results[0])
        setData(json.results);
        // setimgUrl(json.results[0].poster_path)
      }
  }
  return (

    <>
      <div className='movieList' style={{
        marginTop: '8rem', display: 'flex', flexDirection: 'row', flexWrap: 'wrap',

        padding: '0rem 6rem'

      }} >
        {data.map((movie) => {
          console.log(movie);
          return <MovieCard imgUrl={movie.poster_path} movieName={movie.title} key={movie.id} movieDate={movie.release_date}  />

        })}
      </div>
    </>

  )
}

export default MovieData
