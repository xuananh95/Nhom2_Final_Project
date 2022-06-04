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

  console.log(data)
  console.log(searchResults)

  let activeStyle = {
    color: "rgb(255, 107, 77)",

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

  const showSearch = () => {
    return searchResults.map((d) => {
      return <li className='search-list'>
        <h4>{d.title}</h4>
        <small>{d.tagline}</small>
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
            <Link to='/cinema'>Hệ thống rạp chiếu</Link>
          </div>
        </div>
        <div className='header-search header-units'>
          {!searchDisplay ? <div onClick={() => setSearchDisplay(!searchDisplay)}><BsSearch/></div> : (
          <form style={{position: 'relative'}}>
            <input type='search' placeholder='Search' value={searchInput} onChange={(e) => handleSearch(e)}></input>
            <button onClick={() => {setSearchDisplay(!searchDisplay); setSearchInput(''); setSearchResults([])}}><IoCloseSharp/></button>
            {searchResults.length > 0 ? (
            <SearchDropdown>
              <ul>{showSearch()}</ul>
            </SearchDropdown>
            ) : null}
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

const SearchDropdown = styled.div`
  position: absolute;
  width: 300px;
  height: fit-content;
  max-height: 300px;
  background-color: white;
  color: black;
  border-radius: 5px;
  overflow-y: scroll;
  padding: 5px;

  .search-list {
    list-style-type: none;
    margin-bottom: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px;
  }
`