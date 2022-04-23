import React from 'react'
import '../../style/layouts-styles/mainLayout.css'

const MainLayout = ({ children }) => {
  return (
    <main className='mainLayout'>{children} </main>
  )
}

export default MainLayout