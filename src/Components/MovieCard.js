import React from 'react'
import './css/moviecard.css';
import defaultPic from '../img/demo.jpg'
import { useNavigate } from 'react-router-dom';


const MovieCard = ({imgUrl, movieName,movieDate, id}) => {

  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate(`/movie/${id}`)

  }

  return (

    <div className='parentContainer' >
         <div className="imgPre">
          <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} onError={(event)=>event.currentTarget.src=defaultPic} />
      <div className="hoverImg"> 
        <button className='play' onClick={handleClick}  >
        <svg xmlns="http://www.w3.org/2000/svg"  width='1.5rem' height='1.5rem' fill='white' viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
        </button>
      </div>
            </div>
            <div className="cardDetails">
                <p className="title" onClick={handleClick} >{movieName.substring(0,18)}</p>   
                <div className="cardMinorDetails">
                <p className='releaseDate' >{movieDate.split('-')[0]}</p>
                <p className='type' >Movie</p>
                
             </div>
            </div> 

    </div>
  )
}

export default MovieCard