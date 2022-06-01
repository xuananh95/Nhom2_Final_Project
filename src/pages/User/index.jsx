import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { SButton } from '../../components/Button'
import ChangePassword from './ChangePassword'
import EditUserModal from './EditUserModal'
import UserInfo from './UserInfo'

const User = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [showEditUser, setShowEditUser] = useState(false);
    const [showUserInfo, setShowUserInfo] = useState(true);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const current = localStorage.getItem("currentUser")
         ? JSON.parse(localStorage.getItem("currentUser"))
        : null;
        // console.log(current);
        if (!current) {
            navigate("../sign-in", {replace:true});
            toast.error('You need to sign in first!')
        } else {
            setCurrentUser(current);
        }
    }, [showUserInfo])
    console.log(currentUser);

    const handleEdit = () => {
        setShowEditUser(true);
        setShowUserInfo(false);
    }

    const handleCancelEdit=() => {
        setShowEditUser(false);
        setShowUserInfo(true);
    }

    const handleChangePassword = () => {
        setShowChangePassword(true);
        setShowUserInfo(false);
    }

  return (
    <SUser>
        {currentUser && 
        (<>
            {showUserInfo && 
                (<>
                    <div className="picture">
                <img src="https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195161330.jpg" alt="user" width="100" height="100" />
                <h1>{currentUser.username}</h1>
            </div>
            <div className="info">                
                <h1 style={{margin: "15px"}}>Thông tin người dùng</h1>
                <UserInfo user={currentUser} />
                <div className="btn-group">
                    <SButton style={{width: 100, height: 40, fontSize: 12}} onClick={handleEdit}>Sửa thông tin</SButton>
                    <SButton style={{width: 100, height: 40, fontSize: 12}} onClick={handleChangePassword}>Đổi mật khẩu</SButton>
                </div>
            </div>
            
                </>)}
            {showEditUser && <EditUserModal currentUser={currentUser} handleCancel={handleCancelEdit} setShowEditUser={setShowEditUser} setShowUserInfo={setShowUserInfo} />}
            {showChangePassword && <ChangePassword setShowChangePassword={setShowChangePassword} setShowUserInfo={setShowUserInfo} />}
        </>)}
    </SUser>
  )
}

export default User

const SUser = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    width: 100%;
    max-width: 700px;
    background-color: white;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    color: black;
    border-radius: 5px;
    .picture{
        flex: 1;
        text-align: center;
        width: 100%;
        img {
            border-radius: 50%;
            border: 1px solid black;
        }
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .info {
        flex: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        .btn-group {
            width: 100%;
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-around;
        }
        
    }
`;