import React from 'react'
import cardPic from '../img/demo.jpg';
import './moviecard.css';
const MovieCard = ({imgUrl, movieName,movieDate}) => {
  return (
    <div className='parentContainer' >
        <div className="imgPre">
          <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} />
            </div>
            <div className="cardDetails">
                <p className="title">{movieName}</p>   
                <div className="cardMinorDetails">
                <p className='releaseDate' >{movieDate.split('-')[0]}</p>
                <li>132m</li>
                <p className='type' >Movie</p>
                
            </div>
            </div>

    </div>
  )
}

export default MovieCard