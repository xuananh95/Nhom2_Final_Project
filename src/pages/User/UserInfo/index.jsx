import React from 'react'
import { SUserInfo } from './styles';
import { FaUserAlt, FaBirthdayCake, FaPhoneSquareAlt, FaHome } from 'react-icons/fa'
import { BsGenderAmbiguous } from 'react-icons/bs';



const UserInfo = ({ user }) => {
    return (
        <SUserInfo>
            <div className="info-row">
                <span className="info-row-title"><FaUserAlt color="black" style={{ marginRight: "5px" }} />Tên người dùng: </span>
                <span className="info-row-value">{user.username}</span>
            </div>
            <div className="info-row">
                <span className="info-row-title"><BsGenderAmbiguous color="black" style={{ marginRight: "5px" }} />Giới tính: </span>
                <span className="info-row-value">{user.gender === "male" ? "Nam" : "Nữ"}</span>
            </div>
            <div className="info-row">
                <span className="info-row-title"><FaBirthdayCake color="black" style={{ marginRight: "5px" }} />Ngày sinh: </span>
                <span className="info-row-value">{user.dob}</span>
            </div>
            <div className="info-row">
                <span className="info-row-title"><FaPhoneSquareAlt color="black" style={{ marginRight: "5px" }} />Số điện thoại: </span>
                <span className="info-row-value">{user.phone}</span>
            </div>
            <div className="info-row">
                <span className="info-row-title"><FaHome color="black" style={{ marginRight: "5px" }} />Địa chỉ: </span>
                <span className="info-row-value">{user.address}</span>
            </div>
        </SUserInfo>
    )
}

export default UserInfo

