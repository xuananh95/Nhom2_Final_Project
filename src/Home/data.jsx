import React, { useState, useEffect } from 'react'
import Movie from '../components/Movie'
import Newdata from '.'
const Home = () => {
  const [result, setResult] = useState([])
  useEffect(() => {
    fetchdata()
  }, [])
  const fetchdata = async () => {
    const data = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b5390a27207febc778a561a3a16b27d7')
    const datas = await data.json()
    setResult(datas.results)
    localStorage.setItem('Data', JSON.stringify([]))
  }
  return (
    <div>
      {result.map((data) => {
        return <Newdata data={data} />
      })}
      <Movie />
    </div>
  )
}

export default Home