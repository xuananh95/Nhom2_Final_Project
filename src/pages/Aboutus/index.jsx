import React from 'react'
import styled from 'styled-components'
import './styles.css'

const AboutUs = () => {
  return (
    <About>
      <div className='about-container'>
        <h2 style={{textAlign: 'center'}}>Website mua vé xem phim TICKET</h2>
        <h4>Tên nhóm: Team 2 (Nhóm 3)</h4>
        <div className='members'>
          <h4>Thành viên nhóm:</h4>
          <ul>
            <li>Võ Xuân Anh (Leader)</li>
            <li>Đoàn Minh Đức</li>
            <li>...Tuấn</li>
            <li>Hoàng Đức Khánh</li>
          </ul>
        </div>
        <p className='school-name'>@MindX Code Intensive 74</p>
      </div>
    </About>
  )
}

export default AboutUs

const About = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    color: black;

    .about-container {
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

    .members > ul {
      padding-left: 1.5em;
    }

    .school-name {
      position: absolute;
      bottom: 10px;
      right: 20px;
    }
`