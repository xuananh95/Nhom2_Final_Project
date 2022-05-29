import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { useState } from 'react'


const Header = () => {
  const [searchDisplay, setSearchDisplay] = useState(false)

  return (
    <div className='header'>
        <div className='header-logo header-units'>
          <Link to='/'>tickets</Link>
        </div>
        <div className='header-menu header-units'>
          Menu List
          <div className='dropdown-menu'>
            <Link to=''>About us</Link>
            <Link to=''>Cinema list</Link>
          </div>
        </div>
        <div className='header-search header-units'>
          {!searchDisplay ? <div onClick={() => setSearchDisplay(!searchDisplay)}>(Search-Icon)</div> : (
          <form>
            <input type='search' placeholder='Search'></input>
            <button onClick={() => setSearchDisplay(!searchDisplay)}>CLOSE</button>
          </form>)}
        </div>
        <div style={{width: '100%'}}> </div>
        <div className='header-account header-units'>
          <Link to='' className='sign-in-link account-link'>Sign In</Link>
          <Link to='' className='sign-up-link account-link'>Sign Up</Link>
        </div>
    </div>
  )
}

export default Header