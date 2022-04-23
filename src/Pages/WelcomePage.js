import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/pages-styles/welcome.module.css'
const WelcomePage = () => {
  return (
    <div className={style.welcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.welcomInfo}>
        <p>We're working hard to get ClubeHouse ready for everyone! While we wrap up the finiching touches we're adding people gradually to make sure nothing breakes</p>
        <p>Anyone can join with an invite from an existing user - or reserve your username and we'll text you if you have a friend on the app who can let you in. We are so greatful you're here and can't wait to have you join! </p>
        <p>Paul,Rohan & the Clubhouse team</p>
      </div>
      <div className={style.actionsBtns}>
        <Link exact to="/invite" className='primaryButton'>Get your username</Link>
        <Link exact to="/invite">
        Have an invite text? Sign in
      </Link>
      </div>
    </div>
  )
}

export default WelcomePage