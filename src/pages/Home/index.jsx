import React,{ useState ,useEffect} from 'react'

const Newdata = ({data}) => {
    const [trailer,setTrailer]=useState(null)
    const fetchTrailer=async ()=>{
      const datas=await fetch(`https://api.themoviedb.org/3/movie/${data.id}?api_key=61349b2f1730137c30a1c9d2f3fa8d68&append_to_response=videos`)
      const trailerData=await datas.json()
      setTrailer({...data,...trailerData})
    }
    const local=JSON.parse(localStorage.getItem('Data'))
    if(trailer!=null){
      localStorage.setItem('Data',JSON.stringify([...local,trailer]))
    }
    useEffect(()=>{
      fetchTrailer()
     
    },[])
    
  return (
    <div></div>
  )
}

export default Newdata