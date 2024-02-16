import React  from 'react'
import { createContext } from 'react'

const DataProvider= createContext()
export const useData = ()=>{
    return   React.useContext(DataProvider)
}


export const DataContext = ({children}) => {
const fetchingData = async (page , setData) => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&limit=10&sort_by=popularity.desc`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjgyNDM5MTFhZmNlYjFiNWNjN2Q2NzM5OWE0ZTA3YiIsInN1YiI6IjY1Y2I3MjBiMWMwOWZiMDE4MjM4YTFhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9J_RqxFNdaKFt6A34JxC_bR_KMoZhqUeNlfP3CWivsc'
      }
    };
      const res = await fetch(url, options)
      if(res.status===200){

        // console.log(res.status);
        const json = await res.json()
        //  console.log(json.results[0])
        setData(json.results);
        // setimgUrl(json.results[0].poster_path)
      }
    
  }
  let data = fetchingData
  return (
    <DataProvider.Provider value={data} >

    {children}

    </DataProvider.Provider>
  )
}
