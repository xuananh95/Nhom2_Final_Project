import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/Input';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import { v4 as uuidv4 } from 'uuid';

const initialValue = {
    name: '',
    password: '',
    confirmation: '',
}

const Signup = () => {
    const [user, setUser] = useState(initialValue);
    const { username, password, confirmation } = user;
    const navigate = useNavigate();

    useEffect(() => {
        const current = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
        if(current){
            navigate("../", {replace: true});
            toast.error('Bạn đã đăng nhập!');
        }
    })

    const handleRegister = (e) => {
        e.preventDefault();
        if (!username || !password || !confirmation) {
            toast.error('Hãy điền vào tất cả các ô!');
            return;
        }
        if (password !== confirmation) {
            toast.error('Thông tin đăng nhập không đúng!');
            return;
        }
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
        const id = uuidv4();
        const newUser = {
            username,
            password,
            id,
            isAdmin: false,
            phone: '',
            address: '',
            gender: '',
            dob: '',
        }
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
        toast.success('Đăng ký tài khoản thành công!');
        navigate('../sign-in', { replace: true });
    }



    return (
        <SForm onSubmit={handleRegister}>
            <h1 className="text">Register</h1>
            <Input label="Tên đăng nhập" value={username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
            <Input label="Mật khẩu" value={password} onChange={(e) => setUser({ ...user, password: e.target.value })} inputType="password" />
            <Input label="Xác nhận mật khẩu" value={confirmation} onChange={(e) => setUser({ ...user, confirmation: e.target.value })} inputType="password" />
            <Link to="/sign-in">Bạn đã có tài khoản? Đăng nhập ngay!</Link>
            <div className="button-group">
                <Button text="Đăng ký" color="blue" action={handleRegister} />
            </div>
        </SForm>
    )
}

export default Signup

export const SForm = styled.form`
    background-color: white;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 7px 29px 0px;
    
    .text{
        text-align: center;
        color: black;
    }
    .button-group{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
`;
