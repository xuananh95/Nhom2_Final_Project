import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {
  let activeStyle = {
    color: "red",
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
    <div style={{border: "1px solid black"}}>
      <h1>Header</h1>
      {currentUser ? (
          <div className="options">
            <ul>
              {currentUser.isAdmin && (
                <li>
                  <NavLink style={({isActive}) => 
                    isActive ? activeStyle : undefined} to="/admin">Admin
                  </NavLink>
                </li>
              )}
              <li>
                  Xin chào <NavLink style={({isActive}) => 
                    isActive ? activeStyle : undefined} to="/user">{currentUser.username}
                  </NavLink>
                </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
      ) : ( 
        <div className="options">
          <ul>
            <li>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/sign-up">Sign up</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/sign-in">Sign in</NavLink>
            </li>
          </ul>
        </div>      
      ) }
    

    </div>
  )
}

export default Header