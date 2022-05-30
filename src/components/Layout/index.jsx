import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styled from 'styled-components'

const Layout = ({children}) => {
  return (
<<<<<<< Updated upstream
    <div>
        <Header />
        {children}
        <Footer />
    </div>
=======
    <SLayout>
      <Header />
      {children}
      <Footer />
    </SLayout>
>>>>>>> Stashed changes
  )
}

export default Layout

const SLayout = styled.div`
  position: relative;
  min-height: 100vh;
  height: fit-content;
`