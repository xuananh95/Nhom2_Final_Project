import React from 'react'
import { SUserItem } from './styles'
import {AiOutlineDelete} from 'react-icons/ai'
import Button from '../../../components/Button'
const UserItem = ({user}) => {
  const handleShowInfo = () => {

  }

  const handleDelete = () => {

  }
  return (
    <SUserItem>
      <div className="item-left">
        <h3>{user.username}</h3>
      </div>
      <div className="item-right">
        <div className="user-info">
          <button onClick={handleShowInfo}>Xem thêm</button>
        </div>

        <div className="delete">
          <AiOutlineDelete className="delete-btn" fontSize={25}/>
        </div>
      </div>
      <hr />
    </SUserItem>
  )
}

export default UserItem