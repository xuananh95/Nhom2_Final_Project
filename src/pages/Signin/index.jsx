import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { toast } from 'react-toastify'
import { SForm } from '../Signup'

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
            toast.error('You are already logged in!')
        }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!password || !username) {
            toast.error('Fill all the fields!');
            return;
        }
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

        const findUser = users.find(u => u.username === user.username && u.password === user.password);
        if (!findUser) {
            toast.error('Username or passwords not correct!!!');
            return;
        }
        toast.success('Login successful!!!');
        localStorage.setItem('currentUser', JSON.stringify(findUser));
        navigate('../', { replace: true });
    }

    

    return (
        <SForm onSubmit={handleSubmit}>
            <h1 className="text">Sign in</h1>
            <Input label="Username" value={username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
            <Input label="Password" value={password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <Link to="/sign-up">Don't have an account? Sign up</Link>
            <div className="button-group">
                <Button text="Login" />
            </div>
        </SForm>
    )
}

export default SignIn

