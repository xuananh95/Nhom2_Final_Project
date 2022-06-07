import React, { useState, useEffect } from 'react'
import Movie from '../../components/Movie'
import Newdata from '.'
import Error from './error'
const Home = () => {
  const [result, setResult] = useState([])
  const [comingSoon, setComingSoon] = useState([])
  const [error, setError] = useState("")
  const [errComing, setErrorComing] = useState("")
  useEffect(() => {
    fetchdata()
    upComing()
   
  }, [])
  
  const fetchdata = async () => {
    try{
      const data = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b5390a27207febc778a561a3a16b27d7')
    const datas = await data.json()
    setResult(datas.results)
    localStorage.setItem('Data', JSON.stringify([]))
    }
    catch(err){
       setError(err.message)
    }
  }
  const upComing=async ()=>{
    try{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b5390a27207febc778a561a3a16b27d7&language=en-US&page=1')
      const datas=await data.json()
      setComingSoon(datas.results)
    }
    catch(err) {
			setErrorComing(err.message)
		}
  }
   let data=[...result,...comingSoon]
  function getUnique(arr, comp) {

    const unique = arr
      .map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e]).map(e => arr[e]);
     return unique;
  }
  const Alldata= getUnique(data,'id')
  return (
    <>
      {(errComing||error)?<Error />:<div>
       {Alldata.map((data) => {
        return <Newdata data={data} result={result}/>
      })}
      <Movie />
    </div>}
    </>
  )
}

export default Home