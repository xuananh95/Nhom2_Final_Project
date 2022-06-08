import React ,{useState}from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './styles.css'
const Error = ({text}) => {
    const navigate=useNavigate()
    const [reLoad,setReLoad]=useState(false)
  return (
    <div className='wrap_error'>
        <img className='image' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQAQMAAADdiHD7AAAABlBMVEUAAABTU1OoaSf/AAAAAXRSTlMAQObYZgAAAFJJREFUeF7t0cENgDAMQ9FwYgxG6WjpaIzCCAxQxVggFuDiCvlLOeRdHR9yzjncHVoq3npu+wQUrUuJHylSTmBaespJyJQoObUeyxDQb3bEm5Au81c0pSCD8HYAAAAASUVORK5CYII=" alt="" />
        <div>
            <h1>Không thể truy cập trang web này</h1>
        </div>
        <div className='reload_web'> Vui lòng tải lại trang web </div>
    </div>
  )
}

export default Error