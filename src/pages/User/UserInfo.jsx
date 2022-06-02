import React from 'react'
import styled from 'styled-components'

const UserInfo = ({user}) => {
  return (
    <SUserInfo className="info">
        <div className="info-row">
            <span className="info-row-title">Tên người dùng: </span>
            <span className="info-row-value">{user.username}</span>
        </div>
        <div className="info-row">
            <span className="info-row-title">Giới tính: </span>
            <span className="info-row-value">{user.gender === "male" ? "Nam" : "Nữ"}</span>
        </div>
        <div className="info-row">
            <span className="info-row-title">Ngày sinh: </span>
            <span className="info-row-value">{user.dob}</span>
        </div>
        <div className="info-row">
            <span className="info-row-title">Số điện thoại: </span>
            <span className="info-row-value">{user.phone}</span>
        </div>
        <div className="info-row">
            <span className="info-row-title">Địa chỉ: </span>
            <span className="info-row-value">{user.address}</span>
        </div>
    </SUserInfo>
  )
}

export default UserInfo

const SUserInfo = styled.div`
    .info-row {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        .info-row-title{
            flex: 1;
            font-weight: bold;
        }
        .info-row-value{
            margin-left: 35px;
            flex: 1;
        }
    }
`;