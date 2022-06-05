import React ,{useEffect}from 'react'

const Booking = () => {
  useEffect(()=>{
       const data=localStorage.getItem('BooKingData')?JSON.parse(localStorage.getItem('BooKingData')):[]
       localStorage.setItem('BookingData',JSON.stringify([...data,JSON.parse(localStorage.getItem('itemInfo'))]))
  },[])
  return (
    <div>Booking</div>
  )
}

export default Booking