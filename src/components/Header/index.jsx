import React, {useEffect, useState} from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import './styles.css'
import styled from 'styled-components'
import { toast } from 'react-toastify';
import {BsSearch} from 'react-icons/bs'
import {IoCloseSharp} from 'react-icons/io5'
import {ImMenu3} from 'react-icons/im'
import {GiPopcorn} from 'react-icons/gi'

const Header = () => {
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState('')
  let activeStyle = {
    color: "rgb(167, 196, 245)",
  }

  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const data = localStorage.getItem('Data') ? JSON.parse(localStorage.getItem('Data')) : null;
    setData(data);
  }, [])

  useEffect(() => {
    const current = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
    setCurrentUser(current);
    setSearchDisplay(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('../sign-in', {replace: true});
    toast.success('Log out successful!');
  }

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
    if(e.target.value.length > 0) {
      setSearchResults(data.filter((d) => {
        if(d.title.toLowerCase().includes(e.target.value.toLowerCase()) || d.tagline.toLowerCase().includes(e.target.value.toLowerCase())) {return d}
      }))
    } else {setSearchResults([])}
  }

  const image_path='https://image.tmdb.org/t/p/w500'
  const showSearch = () => {
    return searchResults.map((d) => {
      const handleClick = () => {
        setSearchInput('')
        setSearchResults([])
        localStorage.setItem('itemInfo', JSON.stringify(d))
        navigate('/info')
      }
      return <li key={d.id} className='search-list' onClick={handleClick} style={{display: 'flex', gap: '5px'}}>
        <img src={image_path + d.poster_path} style={{width:'20%', height:'auto'}}></img>
        <div style={{width: '80%'}}>
          <h5 style={{color: 'rgb(55, 120, 232)'}}>{d.title}</h5>
          <small style={{color: 'gray'}}>{d.tagline}</small>
        </div>
      </li>
    })
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
            <Link to='/feature'>Các tính năng</Link>
          </div>
        </div>
        <div className='header-search header-units'>
          <div style={{transform:`scale(${searchDisplay?0:1})`}} onClick={() => setSearchDisplay(!searchDisplay)}><BsSearch/></div>
          <form style={{position: 'relative', transform: `scale(${searchDisplay?1:0})`, animation: `${searchDisplay?'displaying':'undisplaying'} 0.3s`}}>
            <input type='search' placeholder='Tìm kiếm' value={searchInput} onChange={(e) => handleSearch(e)}></input>
            <button onClick={(e) => {e.preventDefault(); setSearchDisplay(!searchDisplay); setSearchInput(''); setSearchResults([])}}><IoCloseSharp/></button>
            {searchResults.length > 0 ? (
            <SearchDropdown className='search-dropdown'>
              <ul>{showSearch()}</ul>
            </SearchDropdown>
            ) : null}
          </form>
        </div>
        <div style={{width: '100%'}}> </div>
        {currentUser ? (
          <div className="header-account header-units">
            {(currentUser.isAdmin && (
                <NavLink className='inaccount-link' style={({isActive}) => 
                  isActive ? activeStyle : undefined} to="/admin">(Administrator)
                </NavLink>
            ))}
            <NavLink className='inaccount-link' style={({isActive}) => 
                  isActive ? activeStyle : undefined} to="/user">Xin chào {currentUser.username}!
            </NavLink>
            <button className='inaccount-link' onClick={handleLogout}>Đăng xuất</button>
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

const SearchDropdown = styled.div`
  position: absolute;
  width: 400px;
  height: fit-content;
  max-height: 400px;
  background-color: rgb(15, 21, 31, 0.8);
  background-image: linear-gradient(to right, rgb(15, 20, 30, 0.85), rgb(20, 27, 43, 0.8), rgb(23, 30, 47, 0.75));
  border: 1px solid rgb(108, 135, 154, 0.8);
  border-radius: 5px;
  overflow-y: scroll;
  padding: 10px;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgb(55, 120, 232);
  }

  .search-list {
    color: white;
    list-style-type: none;
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 5px;
    background-color: rgba(24, 40, 60, 0.9);
  }

  .search-list:hover {
    background-color: rgba(38, 56, 79, 0.9);
  }
`
