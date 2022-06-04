import React from 'react'
import styled from 'styled-components'

const AboutUs = () => {
  return (
    <About>
        <h1>Trang web đặt vé xem phim trực tuyến</h1>
        <h2>Nhóm 2 - Team 3 - CI74</h2>
    </About>
  )
}

export default AboutUs

const About = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
`