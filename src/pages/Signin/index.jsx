import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { toast } from 'react-toastify'
import { SForm } from '../Signup'
import {FaUserAlt} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'

const SignIn = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    })
    const navigate = useNavigate();
    const { username, password } = user;

    // if user is already logged in, redirect to home page
    useEffect(() => {
        const current = localStorage.getItem('currentUser');
        if (current) {
            navigate("../", {replace:true});
            toast.error('Bạn đã đăng nhập!')
        }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!password || !username) {
            toast.error('Hãy điền vào tất cả các ô!');
            return;
        }
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

        const findUser = users.find(u => u.username === user.username && u.password === user.password);
        if (!findUser) {
            toast.error('Thông tin đăng nhập không đúng!');
            return;
        }
        toast.success('Đăng nhập thành công!!!');
        localStorage.setItem('currentUser', JSON.stringify(findUser));
        navigate('../', { replace: true });
    }

    

    return (
        <SForm onSubmit={handleSubmit}>
            <h1 className="text">Đăng nhập</h1>
            <Input label="Tên đăng nhập" value={username} onChange={(e) => setUser({ ...user, username: e.target.value })} el={(<FaUserAlt color="white" style={{marginRight:"10px"}} />)} />
            <Input label="Mật khẩu" value={password} onChange={(e) => setUser({ ...user, password: e.target.value })} inputType="password" el={(<RiLockPasswordFill color="white" style={{marginRight:"10px"}} />)}  />
            <Link to="/sign-up">Chưa có tài khoản? Tạo mới ngay!</Link>
            <div className="button-group">
                <Button text="Đăng nhập" color="blue" action={handleSubmit} />
            </div>
        </SForm>
    )
}

export default SignIn

