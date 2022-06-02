import React from 'react'
import { SUserHistory } from './styles'

const UserHistory = () => {
  return (
    <SUserHistory>
        <div className="grid-item item-1">Mã đặt vé</div>
        <div className="grid-item item-2">Phim</div>
        <div className="grid-item item-3">Số vé</div>
        <div className="grid-item item-4">Tổng tiền</div>
        <div className="grid-item item-5">Ngày đặt</div>
    </SUserHistory>
  )
}

export default UserHistory