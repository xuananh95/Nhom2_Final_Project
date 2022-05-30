import React, {useEffect, useState} from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import './styles.css'
import { toast } from 'react-toastify';


const Header = () => {
  const [searchDisplay, setSearchDisplay] = useState(false);
  
  let activeStyle = {
    color: "yellow",
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

        {currentUser ? (
          <div className="options">
            {(currentUser.isAdmin && (
                <NavLink style={({isActive}) => 
                  isActive ? activeStyle : undefined} to="/admin">Administrator
                </NavLink>
            ))}
            <NavLink style={({isActive}) => 
                  isActive ? activeStyle : undefined} to="/user">Xin chào {currentUser.username}
                </NavLink>
              <button onClick={handleLogout}>Logout</button>
          </div>
      ) : ( 
        <div className="options">
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/sign-up">Sign up</NavLink>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/sign-in">Sign in</NavLink>
        </div>      
      ) 
      }
    </div>
  )
}

export default Header