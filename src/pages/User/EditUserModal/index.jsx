import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { SEditUserModal } from './styles';
import Button from '../../../components/Button';



const EditUserModal = ({currentUser, handleCancel, setShowEditUser, setShowUserInfo  }) => {
  const [users, setUsers] = useState([]);
  const [gender, setGender] = useState(currentUser.gender);
  let selected_male = gender === 'male' ? true : false;
  const [dob, setDob] = useState(currentUser.dob);
  const [phone, setPhone] = useState(currentUser.phone);
  const [address, setAddress] = useState(currentUser.address);
  const inputRef = useRef(null);

  useEffect(() => {
    const usersLocal = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    setUsers(usersLocal);
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dob || !phone || !address){
      toast.error('Hãy nhập đầy đủ tất cả các trường!');
      return;
    }
    if (!validatePhoneNumber(phone)) {
      toast.error('Số điện thoại sai định dạng!');
      setPhone('');
      inputRef.current.focus();
      return;
    }
    const newUsers = users.map((c) => c.id === currentUser.id ? {...c, phone: phone, address: address, gender:gender, dob: dob} : c);
    const newUser = newUsers.find(c => c.id === currentUser.id);
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    setShowEditUser(false);
    setShowUserInfo(true);
  }
  


  // xác định format số điện thoại, cho phép các sdt gồm 10 số nếu có nhập số 0 ở đâu, 9 số nếu không
  const validatePhoneNumber = (number) => {
    return /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(number);
  }
  

  return (
    <SEditUserModal onSubmit={handleSubmit}>
      <div className="edit-info">
        <h1>Chỉnh sửa thông tin người dùng</h1>
          <div className="info-row">
            <span className="info-row-title">Giới tính: </span>
            <span className="info-row-value">
              <select onChange={(e) => {setGender(e.target.value)}}>
                <option value="male" selected={selected_male}>Nam</option>
                <option value="female" selected={!selected_male}>Nữ</option>
              </select>
            </span>
          </div>
          <div className="info-row">
              <span className="info-row-title">Ngày sinh: </span>
              <span className="info-row-value"><input type="date" value={dob} onChange={(e) => {setDob(e.target.value)}}  /></span>
          </div>
          <div className="info-row">
              <span className="info-row-title">Số điện thoại: </span>
              <span className="info-row-value"><input type="number" ref={inputRef} value={phone} onChange={(e) => {setPhone(e.target.value)}} /></span>
          </div>
          <div className="info-row">
              <span className="info-row-title">Địa chỉ: </span>
              <span className="info-row-value"><input type="text" value={address} onChange={(e) =>{setAddress(e.target.value)}} /></span>
          </div>
          <div className="btn-group">
              <Button text="HỦY" color="gray" action={handleCancel} />
              <Button text="LƯU" color="blue" action={handleSubmit} />
          </div>
      </div>
    </SEditUserModal>
  )
}

export default EditUserModal

