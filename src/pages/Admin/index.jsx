import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Admin = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const current = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
        if(!current){
            navigate('../sign-in', {replace: true});
            toast.error('You must log in first!!!');
            return;
        }
        console.log(current);
        if (!current.isAdmin){
            navigate('../', {replace: true});
            toast.error('You do not have permission to view this page!');
            return;
        }
        setCurrentUser(current);
    }, [])
    return (
        <div>Admin</div>
    )
}

export default Admin