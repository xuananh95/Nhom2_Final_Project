import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return (
    <SLayout>
      <Header />
      {children}
      <Footer />
    </SLayout>
  )
}

export default Layout

const SLayout = styled.div`
  position: relative;
  min-height: 100vh;
  height: fit-content;
`