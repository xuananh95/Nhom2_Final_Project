import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaGooglePlusG, FaTwitter, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-link'>
          <Link to='/'>Home</Link>
          <Link to='/about-us'>About Us</Link>
          <Link to='/feature'>Features</Link>
          <a href='https://mindx.vn/'>School</a>
        </div>
        <p className='footer-company'> © 2022 Copyright Tickets ~ Nhóm 2 Team 3 CI74 </p>
        <div className='footer-social'>
         <a href='https://www.facebook.com/groups/359070736011219'><FaFacebookF/></a>
         <a href='https://www.google.com.vn/?client=safari'><FaGooglePlusG/></a>
         <a href='https://twitter.com'><FaTwitter/></a>
         <a href='https://github.com/xuananh95/Nhom2_Final_Project'><FaGithub/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer

