import React,{useState, useContext ,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { dataContext } from '../../App'
import './style.css'
const Info = () => {
  const image_path='https://image.tmdb.org/t/p/w500'
  const [cast,setCast]=useState([])
  const [crew,setCrew]=useState([])
  const movieItem=JSON.parse(localStorage.getItem('itemInfo'))
  const fetchdata1=async ()=>{
    const dataCast=await fetch(`https://api.themoviedb.org/3/movie/${movieItem.id}/casts?api_key=61349b2f1730137c30a1c9d2f3fa8d68&append_to_response=videos`)
    const datasCast=await dataCast.json()
    console.log(datasCast)
    setCast(datasCast.cast)
    setCrew(datasCast.crew)
}

  // -- code của chức năng tim kiếm --
  const location = useLocation()
  const [locationKey, setLocationKey] = useState(location.key)
  useEffect(() => {
    setLocationKey(location.key)
    console.log(locationKey)
  }, [location.key])
  // ---------------------------------

  useEffect(()=>{
    fetchdata1()
  },[])
    let allCast=cast.filter((cast,index)=>index<5)
    let directs=crew.filter((crew)=>{
        return crew.known_for_department=='Directing'
    })
  return (
    <div className='wrap_info '>
      <h1>Nội Dung Phim</h1>
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
        </div>
    </div>
    <div className='review'>
      {movieItem.overview}
    </div>
    <div className='avatar-cast'>
      {allCast.map(cast=>{
        return <div className='profile_path'>
          <img src={image_path+cast.profile_path} alt="" />
        </div>
      })}
    </div>
    </div>
  )
}

export default Info