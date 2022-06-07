import React from 'react'
import styled from 'styled-components'
import {MdOutlineFeaturedPlayList} from 'react-icons/md'

const Feature = () => {
  const feature = ['Đăng ký tài khoản, đăng nhập, đăng xuất','Phân quyền người dùng','Tìm kiếm phim theo tên','Xem thông tin và trailer phim','Đặt vé']
  return (
    <About>
      <div className='feature-container'>
        <h2 style={{textAlign: 'center', color: 'rgb(55, 120, 232)'}}>Website mua vé xem phim TICKETS</h2>
        <h4><MdOutlineFeaturedPlayList/> Các tính năng chính của website: </h4>
        <div className='feature'>
          <ul>
            {feature.map(f => <li>{f}</li>)}
          </ul>
        </div>
        <p className='school-name'>@MindX Code Intensive 74</p>
      </div>
    </About>
  )
}

export default Feature

const About = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    color: black;

    .feature-container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 1em;
      background-color: white;
      border-radius: 5px;
      width: 650px;
      height: fit-content;
      padding-bottom: 2em;
    }

    .feature > ul {
      padding-left: 1.5em;
    }

    .school-name {
      position: absolute;
      bottom: 10px;
      right: 20px;
      font-size: 12px;
    }
`