import React from 'react'
import { SError } from './styles'
import {FaSadCry} from 'react-icons/fa'
import {AiOutlineEnter} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Error_404 = () => {
  return (
    <SError>
      <div className="error-container">
      <h1 className="error-header">!404!</h1>
      <h2 className="error-header">Bạn có đang đi lạc không?</h2>
        <h4 className='error-message'>Xin lỗi, chúng tôi không thể tìm thấy trang bạn yêu cầu  <FaSadCry fontSize={35} /></h4>
        
        <h4 className='error-message'>Nếu bạn muốn đặt vé, vui lòng quay về trang chủ</h4>
        <Link to="/">Về trang chủ ngay! <AiOutlineEnter /></Link>
      </div>
        
    </SError>
  )
}

export default Error_404