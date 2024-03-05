import React, {  useRef, useState } from 'react';
import './css/searchBar.css';
import { useNavigate } from 'react-router-dom';
import imgDefault from '../img/demo.jpg'
import { useData } from '../context/DataContext';



const SearchBar = () => {
  const [data, setData] = useState([])
  const [ visible, setVisible] = useState(false)
  const [pages , setTotalPage] = useState(1)
  const {fetchingData ,setQuerry } = useData();
  
   const querry = useRef(null)
   const navigate = useNavigate();
   let timer;
   const handleClick = ()=>{
     navigate("/search")
     setQuerry(querry.current.value)
    }
    const handleChange = (e)=>{
      clearTimeout(timer)
      timer =  setTimeout((first, setData , setTotalPage)=>{
        let value = encodeURIComponent(first)
       const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`;
        fetchingData(url , setData , setTotalPage)
      },1000,e.currentTarget.value , setData , setTotalPage)
    }


  return (
<>
    <div className='searchBar' >
        <div className="container">
        <svg id='searchIcon'  xmlns="http://www.w3.org/2000/svg" fill='black' height='1.3rem' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        <input type="text" placeholder='Enter Keywords...' ref={querry} onChange={handleChange} onBlur={()=>setVisible(false)} onFocus={()=>setVisible(true)}  />
        <button id='searchBtn' onClick={handleClick} >
        <svg xmlns="http://www.w3.org/2000/svg" fill='white'  height='1.8rem'  viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </button>

        </div>
    </div>
   {
    visible&& data.length>2&&
    <div className='searchPreviewParent' >
     <div className="searchPreview">
    
     { data.filter((item,ind)=>ind<15).map((movie)=>{
           return <MovieComponent imgUrl={movie.poster_path} movieName={movie.title} key={movie.id} movieDate={movie.release_date} overView = {movie.overview} />
        })}
    </div>
      </div>
    }
    
    
</>
 )

}
const MovieComponent = ({imgUrl , movieName, movieDate , overView})=>{
  function TextAbstract(text, length) {
    if (text == null) {
        return "";
    }
    if (text.length <= length) {
        return text;
    }
    text = text.substring(0, length);
  //  let last = text.lastIndexOf(" ");
    // text = text.substring(0, last);
    return text + "...";
}


  return(
    <>
    
        <div className="oneMovie">
          <div>
        <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} alt="No Image" onError={(event)=>event.currentTarget.src=imgDefault} />
          </div>
        <div className='oneMovieDetails'>
        <h4>{movieName}</h4>
        <p className='overView' >{TextAbstract(overView,200)}</p>
        <p className='releaseDate' > Release Date : {movieDate}</p>
        </div>
        </div>
      
    </>
  )
  }

export default SearchBar
