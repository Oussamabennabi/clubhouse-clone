import React, { useState } from 'react'
import { MdOutlineNotificationsNone, MdOutlineNotificationsOff } from 'react-icons/md'
import data from '../../data/upcommingData.json'
import cardStyle from '../../style/pages-styles/upcomming.module.css'
import style from '../../style/component-styles/swipeableSeet.module.css'
// icons
import { BsUpload } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { FaRegCopy } from 'react-icons/fa'
import { AiOutlineUserAdd } from 'react-icons/ai'
const NotificationSheet = ({ id }) => {
  const card = data.find((d) => d.id === id)
  const [notificationEnabled, setNotificationEnabled] = useState(false)
  return (
    card &&
    <>
      <div className={style.switchLine}></div>
      <div
        className={cardStyle.card}>
        <div className={cardStyle.cardHeader}>
          <span>{card.time}</span>
          <div onClick={() => setNotificationEnabled(!notificationEnabled)}>
            {notificationEnabled ? <MdOutlineNotificationsOff/>:< MdOutlineNotificationsNone /> }
          

          </div>
        </div>
        <h3>{card.title}</h3>
        <div className={cardStyle.images}>
          {card.images.map((img, i) => (
            <img src={img} alt={`user ${i}`} />
          ))}
        </div>
        <p>{card.description}</p>
      </div>
      <div className={style.notificationLinks}>
        <button><BsUpload />share</button>
        <button><FiTwitter />Tweet</button>
        <button><FaRegCopy />Copy Link </button>
        <button><AiOutlineUserAdd />Add to Call</button>
      </div>
      <div className={style.letsGoBtn}>
        <button>Join the room in progress</button>
      </div>
    </>


  )
}

export default NotificationSheet