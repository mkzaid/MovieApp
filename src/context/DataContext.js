import React from 'react'
import { createContext , useState } from 'react'



const DataProvider = createContext()

export const useData = () => {
  return React.useContext(DataProvider)
}


export const DataContext = ({ children }) => {

  const fetchingData = async (url , setData , setTotalPages) => {
    console.log(url);
      const options = {
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjgyNDM5MTFhZmNlYjFiNWNjN2Q2NzM5OWE0ZTA3YiIsInN1YiI6IjY1Y2I3MjBiMWMwOWZiMDE4MjM4YTFhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9J_RqxFNdaKFt6A34JxC_bR_KMoZhqUeNlfP3CWivsc'
      }
    };
    const res = await fetch(url, options)
      const json = await res.json();
      setData(json.results)
      setTotalPages(json.total_pages)
  }

  return (
    <DataProvider.Provider value={{fetchingData}} >

      {children}

    </DataProvider.Provider>
  )
}
