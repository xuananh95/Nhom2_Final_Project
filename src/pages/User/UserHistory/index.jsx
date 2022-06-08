import React from 'react'
import { SUserHistory } from './styles'

const UserHistory = () => {
  const orders = localStorage.getItem('usersbooked') ? JSON.parse(localStorage.getItem('usersbooked')) : [];
  const userId = JSON.parse(localStorage.getItem('currentUser')).id;
  return (
    <SUserHistory>
      <div className="history-flex-row history-header">
        <div className="history-flex-item item-1">Mã đặt vé</div>
        <div className="history-flex-item item-2">Phim</div>
        <div className="history-flex-item item-3">Số vé</div>
        <div className="history-flex-item item-4">Tổng tiền</div>
        <div className="history-flex-item item-5">Ngày đặt</div>
      </div>
      {orders && orders.filter(item => item.userId === userId).map(item => (
        <div className="history-flex-row" key={item.idTicket}>
          <div className="history-flex-item item-1">{item.idTicket.slice(0, 8)}</div>
          <div className="history-flex-item item-2">{item.nameFilm}</div>
          <div className="history-flex-item item-3">{item.count}</div>
          <div className="history-flex-item item-4">{item.price.toLocaleString('en')} VND</div>
          <div className="history-flex-item item-5">{item.date.slice(0, 10).split("-").reverse().join("-")}</div>
        </div>
      ))}
    
    </SUserHistory>
  )
}

export default UserHistory