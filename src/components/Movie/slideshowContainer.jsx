import React, { Component } from "react";
import {AiFillCaretRight} from 'react-icons/ai'


const SlideshowContainer = ({setCheck}) => {
  return (
          <div className='slideshow_container'>
             <div className='img_container'>
               <img className='slide_img' src=''/>
               <div className='modal_info'>
                  <div className='detail_movie'>
                    <div className='traile_movie' onClick={()=>setCheck(true)}>
                      <AiFillCaretRight/>
                      <span>Trailer</span>
                    </div>
                    <div className='info_movie' >Chi Tiết</div>
                  </div>
                  <h1>''</h1>
               </div>
             </div>
          </div>
  )
}
export default SlideshowContainer