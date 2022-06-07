import React from 'react'
import { SUserInfo } from './styles';
import { FaUserAlt, FaTransgender, FaBirthdayCake, FaPhoneSquareAlt, FaHome } from 'react-icons/fa'



const UserInfo = ({ user }) => {
    return (
        <SUserInfo>
            <div className="info-row">
                <span className="info-row-title"><FaUserAlt color="white" style={{ marginRight: "10px" }} />Tên người dùng: </span>
                <span className="info-row-value">{user.username}</span>
            </div>
            <div className="info-row">
                <span className="info-row-title"><FaTransgender color="white" style={{ marginRight: "10px" }} />Giới tính: </span>
                <span className="info-row-value">{user.gender === "male" ? "Nam" : "Nữ"}</span>
            </div>
            <div className="info-row">
                <span className="info-row-title"><FaBirthdayCake color="white" style={{ marginRight: "10px" }} />Ngày sinh: </span>
                <span className="info-row-value">{user.dob}</span>
            </div>
            <div className="info-row">
                <span className="info-row-title"><FaPhoneSquareAlt color="white" style={{ marginRight: "10px" }} />Số điện thoại: </span>
                <span className="info-row-value">{user.phone}</span>
            </div>
            <div className="info-row">
                <span className="info-row-title"><FaHome color="white" style={{ marginRight: "10px" }} />Địa chỉ: </span>
                <span className="info-row-value">{user.address}</span>
            </div>
        </SUserInfo>
    )
}

export default UserInfo

