import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { SButton } from '../../components/Button'
import ChangePassword from './ChangePassword'
import EditUserModal from './EditUserModal'
import UserInfo from './UserInfo'
import { SUser } from './styles'
import { GiCancel } from 'react-icons/gi'
import UserHistory from './UserHistory'

const User = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [showEditUser, setShowEditUser] = useState(false);
    const [showUserInfo, setShowUserInfo] = useState(true);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showChangeImages, setShowChangeImages] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const current = localStorage.getItem("currentUser")
            ? JSON.parse(localStorage.getItem("currentUser"))
            : null;
        // console.log(current);
        if (!current) {
            navigate("../sign-in", { replace: true });
            toast.error('You need to sign in first!')
        } else {
            setCurrentUser(current);
            const usersLocal = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
            setUsers(usersLocal);
        }
    }, [showUserInfo])

    const handleEdit = () => {
        setShowEditUser(true);
        setShowUserInfo(false);
    }

    const handleCancelEdit = () => {
        setShowEditUser(false);
        setShowUserInfo(true);
    }

    const handleChangePassword = () => {
        setShowChangePassword(true);
        setShowUserInfo(false);
    }

    const handleChangeImage = () => {
        setShowChangeImages(true);
    }

    const handleChooseNewImage = (name) => {
        const newCurrentUser = { ...currentUser, image: name };
        setCurrentUser(newCurrentUser);
        localStorage.setItem('currentUser', JSON.stringify(newCurrentUser));
        const newUsers = users.map(user => user.id === currentUser.id ? { ...user, image: name } : user)
        setUsers(newUsers);
        localStorage.setItem('users', JSON.stringify(newUsers));
        setShowChangeImages(false);
    }

    return (
        <SUser>
            {currentUser &&
                (<>
                    <div className="user-info">
                        {showUserInfo &&
                            (<>
                                <div className="item-left">
                                    <div className="profile-pic" onClick={handleChangeImage}>
                                        <label className="-label">
                                            <span>?????i ???nh</span>
                                        </label>
                                        <img className="ava" src={require(`../../images/${currentUser.image}`)} alt="profile" id="output" width="300" />
                                    </div>
                                    <h1 style={{marginTop: 10}}>{currentUser.username}</h1>
                                </div>
                                <div className="item-right">
                                    {showChangeImages && (
                                        <div className="profile-images">
                                            <div className="images-header">
                                                <h2>CH???N ???NH ?????I DI???N</h2>
                                                <div className="exit" onClick={() => setShowChangeImages(false)}>
                                                    <GiCancel fontSize={"30px"} />
                                                </div>
                                            </div>
                                            <div className="image-row">
                                                <button onClick={() => handleChooseNewImage('default.jpg')}>
                                                    <img className="pic" src={require("../../images/default.jpg")} alt="profile" width="100" height="100" />
                                                </button>
                                                <button onClick={() => handleChooseNewImage('corgi.jpg')}>
                                                    <img className="pic" src={require("../../images/corgi.jpg")} alt="profile" width="100" height="100" />
                                                </button>
                                                <button onClick={() => handleChooseNewImage('cat.jpg')}>
                                                    <img className="pic" src={require("../../images/cat.jpg")} alt="profile" width="100" height="100" />
                                                </button>
                                            </div>
                                            <div className="image-row">
                                                <button onClick={() => handleChooseNewImage('cat2.jpg')}>
                                                    <img className="pic" src={require("../../images/cat2.jpg")} alt="profile" width="100" height="100" />
                                                </button>
                                                <button onClick={() => handleChooseNewImage('shark.jpg')}>
                                                    <img className="pic" src={require("../../images/shark.jpg")} alt="profile" width="100" height="100" />
                                                </button>
                                                <button onClick={() => handleChooseNewImage('bear.jpg')}>
                                                    <img className="pic" src={require("../../images/bear.jpg")} alt="profile" width="100" height="100" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {!showChangeImages && (<div style={{width: "100%"}}><h1 style={{ margin: "15px", textAlign:"center" }}>Th??ng tin ng?????i d??ng</h1>
                                        <UserInfo user={currentUser} />
                                        <div className="btn-group">
                                            <SButton style={{ width: 170, height: 50, fontSize: 20, marginBottom: 20, marginRight: 20 }} onClick={handleEdit}>S???a th??ng tin</SButton>
                                            <SButton style={{ width: 170, height: 50, fontSize: 20, marginBottom: 20 }} onClick={handleChangePassword}>?????i m???t kh???u</SButton>
                                        </div></div>)}
                                </div>
                            </>)}
                        {showEditUser && <EditUserModal currentUser={currentUser} handleCancel={handleCancelEdit} setShowEditUser={setShowEditUser} setShowUserInfo={setShowUserInfo} />}
                        {showChangePassword && <ChangePassword setShowChangePassword={setShowChangePassword} setShowUserInfo={setShowUserInfo} />}
                    </div>

                    <div className="user-history">
                        <h1 style={{marginTop: 20}}>L???ch s??? ?????t v??</h1>
                        <UserHistory />
                    </div>

                </>)}
        </SUser>
    )
}

export default User