import React from 'react'
import MovieData from '../Components/MovieData';
import Navbar from '../Components/Navbar';
import SearchBar from '../Components/SearchBar';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar />
      <MovieData pagination={false}  dataType={'now_playing'} title={"Trending"} />
      <MovieData pagination={false}  dataType={'top_rated'} title={"Top Rated"} />
      <MovieData pagination={false}  dataType={'popular'} title={"Popular"} />
      <MovieData pagination={false}  dataType={'upcoming'} title={"Coming Soon"} />
    </div>
  )
}

export default Home