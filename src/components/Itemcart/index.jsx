import React from "react";
import { SItemCart } from "./styles";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

const CartItem = ({ count,cart,url, handleIncreaseCount, handleDecrease,handlePay }) => {
  const { title, image, price } = cart;
  return (
    <SItemCart>
      <div className="left-cart">
        <img src={url} alt="" />
        <div className="infob">
          <h1 className="name">{cart.original_title}</h1>
        </div>
      </div>
      <div className="right-cart">
      <div className="seats-number">
      <h3 className="seats">Number of seats:</h3>  
      <div className="count">
          <button className="decrease" onClick={() => handleDecrease()}>
            -
          </button>
          <span>{count}</span>
          <button className="plus" onClick={() => handleIncreaseCount()}>
            +
          </button>
        </div>
        <span className="delete">
          <MdDelete color="red" fontSize="25px" />
        </span>
        </div>
        <h3 className="price">Price : {count*70000}  VNĐ</h3>
        <button className="payment" onClick={() => handlePay ()}> Payment</button>
      </div>
    </SItemCart>
  );
};

export default CartItem;
