import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components'
import Button from '../../components/Button';
import Input from '../../components/Input';

const ChangePassword = ({setShowChangePassword, setShowUserInfo}) => {
    const [oldPwd, setOldPwd] = useState('');
    const [newPwd, setNewPwd] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const current = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
        setCurrentUser(current);
        const usersLocal = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []; 
        setUsers(usersLocal);
    }, [])

    const handleCancel = () => {
        setShowChangePassword(false);
        setShowUserInfo(true);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(oldPwd !== currentUser.password) {
            toast.error('Mật khẩu cũ không đúng!');
            setOldPwd('');
            setNewPwd('');
            setConfirmation('');
            return;
        }
        if (newPwd !== confirmation){
            toast.error('Mật khẩu mới không khớp nhau!');
            setNewPwd('');
            setConfirmation('');
            return;
        }
        currentUser.password = newPwd;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        users.map(c => c.id === currentUser.id ? {...c, password: newPwd} : c);
        localStorage.setItem('users', JSON.stringify(users));
        setShowChangePassword(false);
        setShowUserInfo(true);
    }
  return (
    <SChangePwd onSubmit={handleSubmit}>
        <h1>Đổi mật khẩu</h1>
        <Input label="Nhập mật khẩu cũ" value={oldPwd} onChange={(e) => setOldPwd(e.target.value)} inputType="password" />
        <Input label="Nhập mật khẩu mới" value={newPwd} onChange={(e) => setNewPwd(e.target.value)} inputType="password" />
        <Input label="Xác nhận mật khẩu mới" value={confirmation} onChange={(e) => setConfirmation(e.target.value)} inputType="password" />
        <div className="btn-group">
            <Button text="HỦY" color="gray" action={handleCancel} />
            <Button text="LƯU" action={handleSubmit} />
        </div>
    </SChangePwd>
  )
}

export default ChangePassword

const SChangePwd = styled.form`
    background-color: white;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    h1 {
        text-align: center;
        margin-bottom: 10px;
    }
    .btn-group {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 10px;
    }
`;
