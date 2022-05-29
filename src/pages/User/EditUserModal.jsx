import React, { useState } from 'react';
import styled from 'styled-components'

const EditUserModal = ({currentUser}) => {

  return (
    <SEditUserModal>
      <div className="edit-info">
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
      </div>
    </SEditUserModal>
  )
}

export default EditUserModal

const SEditUserModal = styled.form`
  overflow: scroll;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(247, 247, 247, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;