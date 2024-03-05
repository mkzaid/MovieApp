import React from 'react'
import '../Components/css/infoCard.css'
const InfoCardMovie = ({imgUrl,movieName}) => {
  return (
    // <div className='parentContainer'>/
     <div class="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} alt="Argyle Movie Poster" class="movie-poster"/>
        <div class="movie-details">
            <div class="movie-title">{movieName}</div>
            <div class="movie-rating">IMDb: 6</div>
            <div class="movie-plot">
                When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.
            </div>
            <div class="movie-info">
                Released: 2024-01-31 | Duration: 139 min | Genre: Comedy, Action, Crime | Country: United Kingdom, United States Of America
            </div>
            <div class="user-interaction">
                <div class="thumbs-up">&#128077; 10</div>
                <div class="thumbs-down">&#128078; 1</div>
            </div>
        </div>
    </div>
    // </div>
  )
}

export default InfoCardMovie