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
          <Link to=''>Terms</Link>
          <Link to=''>Members</Link>
        </div>
        <p className='footer-company'> © 2022 Copyright Tickets ~ Nhóm 2 Team 3 CI74 </p>
        <div className='footer-social'>
         <a href=''><FaFacebookF/></a>
         <a href=''><FaGooglePlusG/></a>
         <a href=''><FaTwitter/></a>
         <a href=''><FaGithub/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer

