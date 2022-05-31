import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserItem from './UserItem';
import { SAdmin } from './styles';

const Admin = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const current = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
        if(!current){
            navigate('../sign-in', {replace: true});
            toast.error('Bạn cần phải đăng nhập trước!');
            return;
        }
        if (!current.isAdmin){
            navigate('../', {replace: true});
            toast.error('Bạn không đủ quyền để truy cập trang này!');
            return;
        }
        setCurrentUser(current);
        const usersLocal = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
        setUsers(usersLocal);
    }, [])
    return (
        <SAdmin>
            <h1>Danh sách người dùng</h1>
            {users.length > 1 
                ? users.filter(user => user.isAdmin === false)
                        .map(user=>(<UserItem key={user.id} user={user} />)) 
                : (<div>Chưa có người dùng!</div>)}
            {}
        </SAdmin>
    )
}

export default Admin