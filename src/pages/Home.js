import React from 'react'
import MovieData from '../Components/MovieData';
import Navbar from '../Components/Navbar';
import SearchBar from '../Components/SearchBar';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <MovieData pagination={false}  dataType={'now_playing'  } url={`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`} title={"Trending"} />
      <MovieData pagination={false}  dataType={'top_rated'}   url={`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`} title={"Top Rated"} />
      <MovieData pagination={false}  dataType={'popular'} url={`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`} title={"Popular"} />
      <MovieData pagination={false}  dataType={'upcoming'} url={`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`} title={"Coming Soon"} />
      <Footer/>
    </div>
  )
}

export default Home