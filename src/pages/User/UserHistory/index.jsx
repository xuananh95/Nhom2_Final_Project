import React from 'react'
import { SUserHistory } from './styles'

const data = [
  {
    "userid": 1,
    "orderid": 1,
    "movie": "The last airbender",
    "amount": 3,
    "price": 120000,
    "date": "2022-06-04"
  },
  {
    "userid": 3,
    "orderid": 2,
    "movie": "The last airbender",
    "amount": 3,
    "price": 120000,
    "date": "2022-06-04"
  },
  {
    "userid": 2,
    "orderid": 3,
    "movie": "The last airbender",
    "amount": 3,
    "price": 120000,
    "date": "2022-06-04"
  },
  {
    "userid": 1,
    "orderid": 4,
    "movie": "Avenger",
    "amount": 1,
    "price": 12000,
    "date": "2022-06-04"
  },
  {
    "userid": 1,
    "orderid": 5,
    "movie": "Doctor Strange in the multiverse of madness",
    "amount": 3,
    "price": 120000,
    "date": "2022-06-04"
  },
  {
    "userid": 1,
    "orderid": 6,
    "movie": "Top gun maverick",
    "amount": 3,
    "price": 120000,
    "date": "2022-06-04"
  },
  {
    "userid": 1,
    "orderid": 7,
    "movie": "Despicable me 5",
    "amount": 3,
    "price": 120000,
    "date": "2022-06-04"
  },
  {
    "userid": 1,
    "orderid": 8,
    "movie": "Batman v Superman: Dawn of Justice",
    "amount": 3,
    "price": 120000,
    "date": "2022-06-04"
  }
]

const UserHistory = () => {
  const userId = 1;
  return (
    <SUserHistory>
      <div className="history-flex-row">
        <div className="history-flex-item item-1">Mã đặt vé</div>
        <div className="history-flex-item item-2">Phim</div>
        <div className="history-flex-item item-3">Số vé</div>
        <div className="history-flex-item item-4">Tổng tiền</div>
        <div className="history-flex-item item-5">Ngày đặt</div>
      </div>
      {data && data.filter(item => item.userid === userId).map(item => (
        <div className="history-flex-row" key={item.orderid}>
          <div className="history-flex-item item-1">{item.orderid}</div>
          <div className="history-flex-item item-2">{item.movie}</div>
          <div className="history-flex-item item-3">{item.amount}</div>
          <div className="history-flex-item item-4">{item.price.toLocaleString('en')} VND</div>
          <div className="history-flex-item item-5">{item.date}</div>
        </div>
      ))}
    
    </SUserHistory>
  )
}

export default UserHistory