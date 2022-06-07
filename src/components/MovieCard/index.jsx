import React,{ useEffect ,useState,createContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {BsFillPlayFill} from 'react-icons/bs'
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
      <div className='film-list '>
        <div className='product-image'>
           <img  className='product_image-poster' src={image_path+movie.poster_path}/>
           <div className='modal_info model_hidden'>
             <div className='trailer' onClick={play}>
               <span><BsFillPlayFill/></span>
             </div>
             <div className='details'>
               <div className='movie-ticket-btn'onClick={handlePlay}>Mua Vé</div>
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
