import React, { useState } from 'react'
import { SUserItem } from './styles'
import {AiOutlineDelete} from 'react-icons/ai'
import UserInfo from '../../User/UserInfo';
const UserItem = ({user, handleDelete}) => {
  const [showUserInfoOnHover, setShowUserInfoOnHover] = useState(false);

  return (
    <SUserItem>
      <div className="head">
        <div className="item-left">
            <div className="profile-picture">
              <img src={require(`../../../images/${user.image}`)} alt="profile" width={50} height={50} />
            </div>
            <h2>{user.username}</h2>
        </div>
        <div className="item-right">
          <div className="user-info-btn">
            <button onMouseEnter={() => setShowUserInfoOnHover(true)} onMouseLeave={() => setShowUserInfoOnHover(false)} >
              Xem thêm
            </button>
            {showUserInfoOnHover && <div className="info-container">
          <UserInfo user={user} />
      </div>}
          </div>

          <div className="delete">
            <AiOutlineDelete className="delete-btn" fontSize={25} onClick={() => handleDelete(user.id)}/>
          </div>
        </div>
      </div>
      
    </SUserItem>
  )
}

export default UserItem