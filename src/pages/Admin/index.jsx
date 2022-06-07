import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserItem from './UserItem';
import { SAdmin } from './styles';
import {AiOutlineUnorderedList} from 'react-icons/ai'

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

    const handleDelete = (id) => {
        const newUsers = users.filter(user => user.id !== id);
        setUsers(newUsers);
        localStorage.setItem('users', JSON.stringify(newUsers));
    }

    return (
        <SAdmin>
            <div className="admin-page-title"><AiOutlineUnorderedList className="admin-logo" />Danh sách người dùng</div>
            <div className="user-item-header">
                <div>Tên người dùng</div>
                <div>Được tạo lúc</div>
                <div>Lần cuối đăng nhập</div>
                <div>Xóa</div>
            </div>
            {users.length > 1 
                ? users.filter(user => user.isAdmin === false)
                        .map(user=>(<UserItem key={user.id} user={user} handleDelete={handleDelete} />)) 
                : (<div style={{margin: 20}}>Hiện hệ thống chưa có người dùng nào đăng ký tài khoản!</div>)}
            {}
        </SAdmin>
    )
}

export default Admin