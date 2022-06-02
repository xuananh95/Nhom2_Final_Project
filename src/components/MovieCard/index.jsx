import React,{ useEffect ,useState,createContext} from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
const MovieCart = ({handlesetAdd,setIdMovie,setCheck,movie,image_path}) => {
  const [image,setImage]=useState('')
  const [cast,setCast]=useState([])
  const navigate=useNavigate()
  const url=image_path+movie.backdrop_path
const play=()=>{
  setIdMovie(movie.id)
   setCheck(true)
}
  const handlePlay=()=>{
    localStorage.setItem('itemInfo',JSON.stringify(movie))
     navigate('/info')
  }
  return (
      <div className='film-list col l-3'>
        <div className='product-image'>
           <img  src={image_path+movie.poster_path}/>
           <div className='modal_info'>
             <div className='trailer' onClick={play}>
               <span>Play</span>
             </div>
             <div className='details'>
               <div className='info' onClick={handlePlay}>Xem Chi Tiết</div>
               <div className='ticket'>Mua Vé</div>
             </div>
           </div>
        </div>
        <div className='product-info'>
           <div className='movie_name'>{movie.original_title}</div>
        </div>
    </div>
  )
}
export default MovieCart
