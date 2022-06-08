import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SItemCart } from "./styles";

const CartItem = ({ count,cart,url, handleIncreaseCount, handleDecrease,handlePay }) => {
  const navigate = useNavigate();
  const TICKET_PRICE = 70000;
  const handleCancel = () => {
    navigate("../", {replace: true});
  }
  return (
    <SItemCart>
      <div className="left-cart">
        <img src={url} alt="" width={"150"} height={"auto"} />
        <div className="infob">
          <h3 className="name">{cart.original_title}</h3>
        </div>
      </div>
      <div className="right-cart">
        <div className="seats-number">
          <h3 className="seats">Số lượng vé:</h3>  
          <div className="count">
              <button className="decrease" onClick={() => handleDecrease()}>
                -
              </button>
              <span>{count}</span>
              <button className="plus" onClick={() => handleIncreaseCount()}>
                +
              </button>
          </div>
        </div>
        <div className="price">
          <h3>Giá tiền:</h3>
          <h3>{(count * TICKET_PRICE).toLocaleString('en')} VNĐ</h3>
        </div>
        <div className="btn-group">
          <button className="cancel btn" onClick={handleCancel}>Hủy</button>
          <button className="payment btn" onClick={() => handlePay ()}>Đặt vé</button>
        </div>
      </div>
    </SItemCart>
  );
};

export default CartItem;
