import React,{ useEffect ,useState} from 'react'
import {AiFillCaretLeft} from 'react-icons/ai'
import {AiFillCaretRight} from 'react-icons/ai'
import './style.css'
import MovieCart from '../MovieCard'
import YouTube from 'react-youtube'
import Modal from '../Modal'
import SlideshowContainer from './slideshowContainer'
import MovieHot from './movieHot'
import SimpleSlider from '../slide'
const Movie = () => {
    const image_path='https://image.tmdb.org/t/p/w500'
    const [result,setResult]=useState([])
    const [titles,setTitles]=useState('')
    const [image,setImage]=useState({})
    const [idMovie,setIdMovie]=useState('')
    const [check,setCheck]=useState(false)
    const [add,setAdd]=useState([])
    let movieItem=document.querySelectorAll('.film-list')
    let slide_products=document.getElementById('slide_products')
    const [X,setX]=useState(0)
    let y=0
   useEffect(()=>{

      const data=JSON.parse(localStorage.getItem('Data'))
      setResult(data)
   },[])
   const leftSlide=()=>{
       y=X+300
       setX(y)
       slide_products.style.left=`${y}`+'px'
       if(y==0){
         document.getElementById('left').style.display='none'
       }
       if(y>-4800){
         document.getElementById('right').style.display='block'
       }
   }
   const nextSlide=()=>{
     y=X-300
     setX(y)
     slide_products.style.left=`${y}`+'px'
     if(y!=0){
       document.getElementById('left').style.display='block'
     }
     if(y<=-4800){
       document.getElementById('right').style.display='none'
     }
   }
   const hidden=()=>{
     document.querySelector('.model_trailer').style.display='none'
   }
  return (
    <div className='Movie'>
      <SimpleSlider data={result} setIdMovie={setIdMovie} setCheck={setCheck} />
      {/* <SlideshowContainer /> */}
       <div className='tab_content'>
       <div className='status'>
         <h2 className='now_showing'>Phim đang chiếu</h2>
         <h2 className='coming_soon'>Phim sắp chiếu</h2>
       </div>
       <div className='wrap_slide grid wide'>
         <div id='slide_products' className='slide_product row'>
          {result.map((movie,index)=>{
           return (
              <MovieCart   setIdMovie={setIdMovie} setCheck={setCheck}   movie={movie} image_path={image_path} />
            )
           })}
         </div>
        </div>
           <div id='left' onClick={leftSlide}><AiFillCaretLeft/></div>
           <div id='right' onClick={nextSlide}><AiFillCaretRight/></div>
       </div>
          {check&&<Modal  idMovie={idMovie} setCheck={setCheck} />} 
          
    </div>
  )
}
export default Movie