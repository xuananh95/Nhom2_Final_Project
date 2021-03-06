import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import { Link} from 'react-router-dom'
import Slider from "react-slick";
import './styles.css'
import {AiFillCaretRight} from 'react-icons/ai'
 export default class SimpleSlider extends Component {
  // 
   render() {
      const settings= {
        dots: false,
        className: "center",
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        cssEase: "linear"
     };
     const play=()=>{
      
    }
     const path='https://image.tmdb.org/t/p/w500'
     return (
       <div className="wrap_slider_slick">
         <Slider {...settings}>
             {this.props.data.map((d)=>{
              return (
              <div className='slideshow_container'>
              <div className='img_container'>
                <img className='slide_img' src={path+d.backdrop_path}/>
                <div className='modal_info'>
                  <div className="wrap_detail_movie">
                    <h3 className="detail_movie-name">{d.title}</h3>
                   <div className='detail_movie'>
                       <div className='traile_movie' onClick={()=>{
                               this.props.setIdMovie(d.id)
                               this.props.setCheck(true)
                               }}>
                          <AiFillCaretRight/>
                          <span>Trailer</span>
                       </div>
                          <Link to='/info' className='info_movie' onClick={(e)=>{
                             localStorage.setItem('itemInfo',JSON.stringify(d))
                           }} >Chi Tiết</Link>
                   </div>
                  </div>
                </div>
              </div>
           </div>)
            })} 
         </Slider>
       </div>
     );
   }
 }