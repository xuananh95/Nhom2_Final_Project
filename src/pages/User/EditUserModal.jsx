import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components'
import { validate } from 'uuid';
import Button, { SButton } from '../../components/Button';

const EditUserModal = ({currentUser, handleCancel}) => {
  const [gender, setGender] = useState('male');
  const [dob, setDob] = useState(new Date());
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dob || !phone || !address){
      toast.error('Hãy nhập đầy đủ tất cả các trường!');
      return;
    }
    if (!validatePhoneNumber(phone)) {
      toast.error('Số điện thoại sai định dạng!');
      setPhone('');
      inputRef.current.focus();
      return;
    }
  }


  // xác định format số điện thoại, cho phép các sdt gồm 10 số nếu có nhập số 0 ở đâu, 9 số nếu không
  const validatePhoneNumber = (number) => {
    return /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(number);
  }
  

  return (
    <SEditUserModal onSubmit={handleSubmit}>
      <div className="edit-info">
        <h1>Chỉnh sửa thông tin người dùng</h1>
          <div className="info-row">
            <span className="info-row-title">Giới tính: </span>
            <span className="info-row-value">
              <select>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
              </select>
            </span>
          </div>
          <div className="info-row">
              <span className="info-row-title">Ngày sinh: </span>
              <span className="info-row-value"><input type="date" value={dob} onChange={(e) => {setDob(e.target.value)}}  /></span>
          </div>
          <div className="info-row">
              <span className="info-row-title">Số điện thoại: </span>
              <span className="info-row-value"><input type="number" ref={inputRef} value={phone} onChange={(e) => {setPhone(e.target.value)}} /></span>
          </div>
          <div className="info-row">
              <span className="info-row-title">Địa chỉ: </span>
              <span className="info-row-value"><input type="text" value={address} onChange={(e) =>{setAddress(e.target.value)}} /></span>
          </div>
          <div className="btn-group">
              <button className="edit-btn" onClick={handleCancel}>HỦY</button>
              <Button text="LƯU" />
          </div>
      </div>
    </SEditUserModal>
  )
}

export default EditUserModal

const SEditUserModal = styled.form`
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;
  max-width: 700px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  border-radius: 5px;
  padding: 20px;
  .edit-info{
    width: 80%;
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }
    .info-row {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .info-row-title{
        flex: 1;
        font-weight: bold;
      }
      .info-row-value {
        flex: 1;
        margin-left: 35px;
      }
    }
    .btn-group{
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .edit-btn{
        margin-right: 20px;
        width: 80px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: black;
        border: none;
        background-color: #c0bdbd;
        border-radius: 5px;
        padding: 10px;
        font-size: 15px;
      }
    }
  }
`;