import React, { useEffect, useState } from 'react'
import SmallNavbar from '../Components/SmallNavbar'
import demo from '../img/demo.jpg'
import './moviePage.css'
import { useParams } from 'react-router-dom'
import InfoCardMovie from '../Components/InfoCardMovie'
const MoviePage = () => {
    const [data ,setData] = useState({})
    const{ movieId } = useParams();
    const myStyle={
        background:`url(https://image.tmdb.org/t/p/original/qtafXiYDUMKxzsssU41qWey5oiT.jpg) center  no-repeat `,
    }
  const dataFetchingMovie = async ()=>{

      let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=eb8243911afceb1b5cc7d67399a4e07b`;
      let options = {
          method: 'GET',
          headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjgyNDM5MTFhZmNlYjFiNWNjN2Q2NzM5OWE0ZTA3YiIsInN1YiI6IjY1Y2I3MjBiMWMwOWZiMDE4MjM4YTFhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9J_RqxFNdaKFt6A34JxC_bR_KMoZhqUeNlfP3CWivsc'
            }}
            const res = await fetch(url, options)
            const json = await res.json();
            setData(json)
        }
        useEffect(()=>{
              dataFetchingMovie();
              console.log(movieId);
              console.log(data);
        },[])
            return (
 <>
 <SmallNavbar/>
 <div className="playBtnContainer" >
    <div className="posterImg">
        <img  src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" />
    </div>
    <div className='btnDiv'>
   <button>
   <svg xmlns="http://www.w3.org/2000/svg"  width='1.8rem' height='1.8rem' fill='white  ' viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
   </button>
    </div>
    <div className="movieCard">
        <InfoCardMovie imgUrl={data.poster_path} movieName= {data.orignal_title} />
    </div>
 </div>
   
 </>
  )
}

export default MoviePage