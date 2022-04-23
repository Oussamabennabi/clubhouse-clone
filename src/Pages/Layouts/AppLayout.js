import React from 'react'
import style from '../../style/layouts-styles/appLayout.module.css'
const AppLayout = ({children}) => {
  return (
    <main className={style.AppLayout}>
      {children}
    </main>
  )
}

export default AppLayout