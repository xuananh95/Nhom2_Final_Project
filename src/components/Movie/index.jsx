import React,{ useEffect ,useState,useRef} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../slide/styles.css'
import './style.css'
import MovieCart from '../MovieCard'
import YouTube from 'react-youtube'
import Modal from '../Modal'
import SimpleSlider from '../slide'
const Movie = () => {
  const h2RefComingsoon = useRef(null)
  const h2Refnowplaying = useRef(null)
  var today = new Date();
  var date =today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const current=new Date(date)
    const image_path='https://image.tmdb.org/t/p/w500'
    
    const [result,setResult]=useState([])
    const [idMovie,setIdMovie]=useState('')
    const [check,setCheck]=useState(false)
    const [resultAll,setResultAll]=useState([])
  const settingss = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('Data'))
    setResultAll(data)
    setResult(data)
   },[])
   const comingsoon=()=>{
     const commingsoon=resultAll.filter((item,index)=>{
      const dukien= item.release_date
      const dukiens=new Date(dukien)
      return dukiens>=current
     })
     setResult(commingsoon)
     h2Refnowplaying.current.classList.remove('active_comingson')
     h2RefComingsoon.current.classList.add('active_comingson')
     }
     const nowPlaying=()=>{
      const commingsoon=resultAll.filter((item,index)=>{
       const dukien= item.release_date
       const dukiens=new Date(dukien)
       return dukiens<=current
      })
      h2RefComingsoon.current.classList.remove('active_comingson')
      h2Refnowplaying.current.classList.add('active_comingson')
      setResult(commingsoon)
      }
  return (
    <div className='Movie'>
      <SimpleSlider data={resultAll} setIdMovie={setIdMovie} setCheck={setCheck} />
       <div className='tab_content'>
       <div className='status'>
         <h2 ref={h2Refnowplaying} className='now_showing' onClick={nowPlaying}>Phim đang chiếu</h2>
         <div className='middle'></div>
         <h2 ref={h2RefComingsoon} className='coming_soon' onClick={comingsoon}>Phim sắp chiếu</h2>
       </div>
       <div className='wrap_slide '>
         <div id='slide_products' className='slide_product '>
         <Slider {...settingss}>
            {result&&result.map((movie,index)=>{
           return (
                <MovieCart   setIdMovie={setIdMovie} setCheck={setCheck}   movie={movie} image_path={image_path} />
            )
           })}
            </Slider>
         </div>
        </div>
       </div>
          {check&&<Modal  idMovie={idMovie} setCheck={setCheck} />} 
    </div>
  )
}
export default Movie