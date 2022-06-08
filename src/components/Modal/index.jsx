import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
const Modal = ({setCheck,idMovie,check}) => {
    
  return (
    <div>
       <Trailer idMovie={idMovie}  setCheck={setCheck} check={check}/>
    </div>
  )
}
const Trailer = ({setCheck,idMovie,check}) => {
    const [trailer,setTrailer]=useState('')
    const fetchTrailer=async ()=>{
      const data=await fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=61349b2f1730137c30a1c9d2f3fa8d68&append_to_response=videos`)
      const trailerData=await data.json()
      const dataTrailer=trailerData.videos.results.find(video=>{
         return video.name.includes('Official')&&video.name.includes('Trailer')
      })
      setTrailer(dataTrailer)
    }
    useEffect(()=>{
      fetchTrailer()
    },[])
    const setcheck=()=>{
      check=false
    }
    return (
      <div className='model_trailer' onClick={()=>setCheck(false)} >
         <div className='video'>
           <YouTube 
              videoId={trailer.key}
           />
        </div>
         </div>
    )
  }
export default Modal