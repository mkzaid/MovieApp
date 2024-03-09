import React from 'react'
import '../Components/css/infoCard.css'
const InfoCardMovie = ({imgUrl,movieName, average, count , tagline , overView , date , duration , genres , company , languages }) => {


 let votingLineWidth = Math.round(average*10)

        
  return (
     <div className="movieCard">
        <div className="leftContainer">
        <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} alt="Argyle Movie Poster" className="movie-poster"/>
        <div style={{marginTop:'10px'}} >
        <p style={{color:'rgb(183, 124, 183)', fontWeight:'550', fontSize:'1.2rem' , display:'inline'}  } >{votingLineWidth}%</p>
        <p style={{display:'inline'}} > \ {count} voted</p>
        </div>
        <div className="ratingBar">
            <div style={{width:`${votingLineWidth}%`}}  className="ratingLine">

            </div>
        </div>
       
        <div className="likeDislikeContainer">
            <button>
                Like
            </button>
            <button>
                Dislike
            </button>
        </div>
        </div>
        <div className="rightContainer">
            <div className="btnContainer">
                <button>Watch Now</button>
                <button>Add to favorite</button>
            </div>
            <div className="movieTitle">
                <p>{movieName}</p>
            </div>
            <div className="rating">
            <p>{tagline}</p>
            </div>
            <div className="overview">
            <p>{overView}</p>
            </div>
            <div className="movieInfo">
                 <p> <strong>Released Date :    </strong>  {date}</p>
                 <p> <strong>Duration : </strong> {duration}m  </p>
                 <p> <strong>Genres :</strong> {genres&&genres.map((genre)=>`${genre.name} `)}</p>
                 <p><strong>Production Company : </strong> {company&&company.map((company)=>`${company.name}, `)} </p>
                 { languages && <p><strong>Language: </strong> {languages.map((obj)=>obj.english_name)} </p>}
            </div>
        </div>
    </div>
  )
}

export default InfoCardMovie