import React from 'react'
import './moviecard.css';
import defaultPic from '../img/demo.jpg'


const MovieCard = ({imgUrl, movieName,movieDate}) => {
  return (
    <div className='parentContainer' >
        <div className="imgPre">
          <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} onError={(event)=>event.currentTarget.src=defaultPic} />
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