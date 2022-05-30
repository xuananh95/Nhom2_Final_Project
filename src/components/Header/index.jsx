import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
<<<<<<< Updated upstream
import { useState } from 'react'


const Header = () => {
  const [searchDisplay, setSearchDisplay] = useState(false)
=======
import { toast } from 'react-toastify';
import {BsSearch} from 'react-icons/bs'
import {MdExpandMore} from 'react-icons/md'
import {IoCloseSharp} from 'react-icons/io5'


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
>>>>>>> Stashed changes

  return (
    <div className='header'>
        <div className='header-logo header-units'>
          <Link to='/'>tickets</Link>
        </div>
        <div className='header-menu header-units'>
          Menu List <MdExpandMore/>
          <div className='dropdown-menu'>
            <Link to=''>About us</Link>
            <Link to=''>Cinema list</Link>
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
<<<<<<< Updated upstream
        <div className='header-account header-units'>
          <Link to='' className='sign-in-link account-link'>Sign In</Link>
          <Link to='' className='sign-up-link account-link'>Sign Up</Link>
        </div>
=======

        {currentUser ? (
          <div className="header-account header-units">
            {(currentUser.isAdmin && (
                <NavLink style={({isActive}) => 
                  isActive ? activeStyle : undefined} to="/admin">Administrator
                </NavLink>
            ))}
            <NavLink style={({isActive}) => 
                  isActive ? activeStyle : undefined} to="/user">Xin chào {currentUser.username}!
            </NavLink>
            <button onClick={handleLogout}>Logout</button>
          </div>
      ) : ( 
        <div className="header-account header-units">
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/sign-up" className='account-link'>Sign up</NavLink>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/sign-in" className='account-link sign-up-link'>Sign in</NavLink>
        </div>      
      ) 
      }
>>>>>>> Stashed changes
    </div>
  )
}

export default Header