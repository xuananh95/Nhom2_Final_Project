import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { SChangePwd } from './styles';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

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
        toast.success('Đổi mật khẩu thành công!');
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


