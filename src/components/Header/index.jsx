import React, {useEffect, useState} from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import './styles.css'
import { toast } from 'react-toastify';
import {BsSearch} from 'react-icons/bs'
import {IoCloseSharp} from 'react-icons/io5'
import {ImMenu3} from 'react-icons/im'
import {GiPopcorn} from 'react-icons/gi'

const Header = () => {
  const [searchDisplay, setSearchDisplay] = useState(false);

  let activeStyle = {
    color: "rgb(255, 107, 77)",

  }
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const current = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
    setCurrentUser(current);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('../sign-in', {replace: true});
    toast.success('Log out successful!');
  }

  return (
    <div className='header'>
        <div className='header-logo header-units'>
          <Link to='/'><GiPopcorn/>tickets</Link>
        </div>
        <div className='header-menu header-units'>
          <ImMenu3/>
          <div className='dropdown-menu'>
            <Link to='/about-us'>Về chúng tôi</Link>
            <Link to='/cinema'>Hệ thống rạp chiếu</Link>
          </div>
        </div>
        <div className='header-search header-units'>
          {!searchDisplay ? <div onClick={() => setSearchDisplay(!searchDisplay)}><BsSearch/></div> : (
          <form>
            <input type='search' placeholder='Search'></input>
            <button onClick={() => setSearchDisplay(!searchDisplay)}><IoCloseSharp/></button>
          </form>)}
        </div>
        <div style={{width: '100%'}}> </div>
        {currentUser ? (
          <div className="header-account header-units">
            {(currentUser.isAdmin && (
                <NavLink style={({isActive}) => 
                  isActive ? activeStyle : undefined} to="/admin">(Administrator)
                </NavLink>
            ))}
            <NavLink style={({isActive}) => 
                  isActive ? activeStyle : undefined} to="/user">Xin chào {currentUser.username}!
            </NavLink>
            <button onClick={handleLogout}>Đăng xuất</button>
          </div>
        ) : ( 
          <div className="header-account header-units">
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/sign-up" className='account-link'>Đăng ký</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/sign-in" className='account-link sign-up-link'>Đăng nhập</NavLink>
          </div>      
        ) 
      }
    </div>
  )
}

export default Header