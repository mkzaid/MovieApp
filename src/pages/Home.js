import React from 'react'
import MovieData from '../Components/MovieData';
import Navbar from '../Components/Navbar';
import SearchBar from '../Components/SearchBar';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <MovieData/>
    </div>
  )
}

export default Home