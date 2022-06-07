import React,{useState, useContext ,useEffect} from 'react'
import { dataContext } from '../../App'
import {AiOutlineHome} from 'react-icons/ai'
import { Link,useNavigate } from 'react-router-dom'
import Error from '../Home/error'
import './style.css'
const Info = () => {
  const navigate=useNavigate()
  const image_path='https://image.tmdb.org/t/p/w500'
  const [cast,setCast]=useState([])
  const [crew,setCrew]=useState([])
  const [error,setError]=useState('')
  const movieItem=JSON.parse(localStorage.getItem('itemInfo'))
  const fetchdata1=async ()=>{
    try{
      const dataCast=await fetch(`https://api.themoviedb.org/3/movie/${movieItem.id}/casts?api_key=61349b2f1730137c30a1c9d2f3fa8d68&append_to_response=videos`)
    const datasCast=await dataCast.json()
    setCast(datasCast.cast)
    setCrew(datasCast.crew)
    }
    catch(err){
       setError(err.message)
    }
}
  useEffect(()=>{
    window.scrollTo(0,0);
    fetchdata1()
  },[])
  const Booking=()=>{
    !(localStorage.getItem('currentUser'))?navigate('/sign-in'):navigate('/booking')
    
  }
    let allCast=cast.filter((cast,index)=>index<5)
    let directs=crew.filter((crew)=>{
        return crew.known_for_department=='Directing'
    })
  return (
    <>
      {error?<Error/>:<div className='wrap_info '>
      <div className="infoToHome">
      <Link to={'/'} className='infoToHome_link'><AiOutlineHome /></Link>
      <span>{'>'}</span>
      <h3>{movieItem.title}</h3>
      </div>
      <div className='information '>
        <div className='avatar'>
          <img className='img_info' src={image_path+ movieItem.poster_path} alt="" />
        </div>
        <div className='product-information '>
          <h2>{movieItem.original_title}</h2>
          <div className='film-detail'>
            <div className='std'>
               <label>Đạo Diễn :</label>
               <div className="content">
                {directs.map((direct,index)=> {
                   if(index<(directs.length-1)){
                    return <>
                    <span> {direct.name} ,</span>
                  </>
                   }else {
                    return <>
                    <span> {direct.name}</span>
                  </>
                   }
                })}
               </div>
            </div>
            <div className='std'>
               <label>Diễn Viên :</label>
               <div className="content">
               {allCast.map((cast,index)=> {
                   if(index<(allCast.length-1)){
                    return <>
                    <span> {cast.name} ,</span>
                  </>
                   }else {
                    return <>
                    <span> {cast.name}</span>
                  </>
                   }
                })} 
               </div>
            </div>
            <div className='std'>
               <label>Thể Loại :</label>
               <div className="content">
               {movieItem.genres.map((cast,index)=> {
                   if(index<(movieItem.genres.length-1)){
                    return <>
                    <span> {cast.name} ,</span>
                  </>
                   }else {
                    return <>
                    <span> {cast.name}</span>
                  </>
                   }
                })}  
               </div>
            </div>
            <div className='std'>
               <label>Ngày Khởi Chiếu :</label>
               <div className="content">{movieItem.release_date}</div>
            </div>
            <div className='std'>
               <label>Thời Lượng :</label>
               <div className="content">{movieItem.runtime} Phút</div>
            </div>
          </div>
          <div className='product-BooKing' onClick={Booking}>Mua Vé Ngay</div>
        </div>

    </div>
    <div className='review'>
      <h3>Tổng Quan</h3>
      <div className='movieItem_overview'>{movieItem.overview}</div>
    </div>
    </div>}
    </>
  )
}

export default Info