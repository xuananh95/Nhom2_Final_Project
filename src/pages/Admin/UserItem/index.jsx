import React, { useState } from 'react'
import { SUserItem } from './styles'
import {AiOutlineDelete, AiOutlineInfoCircle} from 'react-icons/ai'
import UserInfo from '../../User/UserInfo';
const UserItem = ({user, handleDelete}) => {
  const [showUserInfoOnHover, setShowUserInfoOnHover] = useState(false);
  const timeCreated = new Date(user.createdAt);
  const strTimeCreated = `${timeCreated.getUTCDate()}/${timeCreated.getUTCMonth() + 1}/${timeCreated.getUTCFullYear()} ${timeCreated.toTimeString().split(' ')[0]}`
  let strTimeLastSignedIn = 'Người dùng chưa đăng nhập'
  if (user.lastSignedInAt) {
    const timeLastSignedIn = new Date(user.lastSignedInAt);
    strTimeLastSignedIn = `${timeLastSignedIn.getUTCDate()}/${timeLastSignedIn.getUTCMonth() + 1}/${timeLastSignedIn.getUTCFullYear()} ${timeLastSignedIn.toTimeString().split(' ')[0]}`
  }

  return (
    <SUserItem>
      <div className="user-item-user">
        <span style={{fontSize: '1.5rem'}}>{user.username}</span>
        <div className="user-info-btn">
          {/* <button onMouseEnter={() => setShowUserInfoOnHover(true)} onMouseLeave={() => setShowUserInfoOnHover(false)} > */}
          <AiOutlineInfoCircle className="user-info-icon" onMouseEnter={() => setShowUserInfoOnHover(true)} onMouseLeave={() => setShowUserInfoOnHover(false)}/>
          {/* </button> */}
          {
            showUserInfoOnHover && 
                <div className="info-container">
                    <UserInfo user={user} />
                </div>
          }
        </div>

      </div>
      <div>{strTimeCreated}</div>
      <div>{strTimeLastSignedIn}</div>
      
      <div className="delete">
        <AiOutlineDelete className="delete-btn" fontSize={30} onClick={() => handleDelete(user.id)}/>
      </div>


      {/* <div className="user-item-row">
        <div className="user-item-name">
            <h2>{user.username}</h2>
        </div>
        <div className="user-item-action">
          <div className="user-info-btn">
            <button onMouseEnter={() => setShowUserInfoOnHover(true)} onMouseLeave={() => setShowUserInfoOnHover(false)} >
              Xem thêm
            </button>
            {
              showUserInfoOnHover && 
                  <div className="info-container">
                      <UserInfo user={user} />
                  </div>
            }
          </div>

          <div className="delete">
            <AiOutlineDelete className="delete-btn" fontSize={30} onClick={() => handleDelete(user.id)}/>
          </div>
        </div>
      </div> */}
      
    </SUserItem>
  )
}

export default UserItem