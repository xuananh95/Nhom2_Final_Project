import React, { useState } from 'react';
import styled from 'styled-components'
import Button, { SButton } from '../../components/Button';

const EditUserModal = ({currentUser}) => {

  return (
    <SEditUserModal>
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
              <span className="info-row-value"><input type="date" /></span>
          </div>
          <div className="info-row">
              <span className="info-row-title">Số điện thoại: </span>
              <span className="info-row-value"><input type="text" /></span>
          </div>
          <div className="info-row">
              <span className="info-row-title">Địa chỉ: </span>
              <span className="info-row-value"><input type="text" /></span>
          </div>
          <div className="btn-group">
              <Button text="HỦY" />
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
  }
`;