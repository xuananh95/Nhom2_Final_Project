import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SUserHistory } from './styles'

const UserHistory = () => {
  const orders = localStorage.getItem('usersbooked') ? JSON.parse(localStorage.getItem('usersbooked')) : [];
  const userId = JSON.parse(localStorage.getItem('currentUser')).id;
  const data = localStorage.getItem('Data') ? JSON.parse(localStorage.getItem('Data')) : [];
  const navigate = useNavigate()

  const handleCheckFilm = (name) => {
    const itemInfo = data.filter(item => {
      return item.title === name
    })
    itemInfo.length > 0 && localStorage.setItem('itemInfo', JSON.stringify(itemInfo[0]))
    navigate('/Info')
  }

  return (
    <SUserHistory>
      <div className="history-flex-row history-header">
        <div className="history-flex-item item-1">Mã đặt vé</div>
        <div className="history-flex-item item-2">Phim</div>
        <div className="history-flex-item item-3">Số vé</div>
        <div className="history-flex-item item-4">Tổng tiền</div>
        <div className="history-flex-item item-5">Ngày đặt</div>
      </div>
      {orders.length ? (orders.filter(item => item.userId === userId).map(item => (
        <div className="history-flex-row" key={item.idTicket}>
          <div className="history-flex-item item-1">{item.idTicket.slice(0, 8)}</div>
          <div className="history-flex-item item-2" onClick={() => handleCheckFilm(item.nameFilm)}>{item.nameFilm}</div>
          <div className="history-flex-item item-3">{item.count}</div>
          <div className="history-flex-item item-4">{item.price.toLocaleString('en')} VND</div>
          <div className="history-flex-item item-5">{item.date.slice(0, 10).split("-").reverse().join("-")}</div>
        </div>
      ))): <p style={{padding:'2rem'}}>Bạn chưa đặt vé...</p>}
    
    </SUserHistory>
  )
}

export default UserHistory