import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/pages-styles/allowNotifications.module.css'
const AllowNotifications = () => {
  return (
    <div className={style.AllowNotificationsContainer}>
      <h1>Last,important step!</h1>
      <p>Enable notifications to know when people are talking</p>
      <div className={style.notificationContainer}>
        <h2>"Clubhouse Would Like To Send You Notifications"</h2>
        <p>Notifications May include alerts,sounds and icon badges,these can be configured in the settings</p>
        <div className={style.btnsContainer}>
          <Link exact to="/home" className={style.btn}>Don't Allow</Link>
          <Link exact to="/home" className={style.btn}>Allow</Link>
          
          
        </div>
      </div>
      <img src='/images/notification-hand.svg' alt='notification-hand'/>
    </div>
  )
}

export default AllowNotifications