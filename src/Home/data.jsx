import React,{ useState ,useEffect} from 'react'
import Movie from '../components/Movie'
import Newdata from '.'
const Home = () => {
  const [result,setResult]=useState([])
  useEffect(()=>{
    fetchdata()
  },[])
  const fetchdata=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/discover/movie?api_key=61349b2f1730137c30a1c9d2f3fa8d68')
    const datas=await data.json()
    setResult(datas.results)   
    localStorage.setItem('Data',JSON.stringify([]))
}
  return (
    <div>
      {result.map((data)=>{
        return <Newdata  data={data}/>
      })}
      <Movie/>
    </div>
  )
}
 
export default Home