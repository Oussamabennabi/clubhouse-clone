import React from 'react'
import style from '../style/component-styles/card.module.css'
import { FaCommentDots, FaRegCommentDots } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
const Card = ({ header, subHeader, names, images, inRoom, comments, setHomeSheetOpenState }) => {
  return (
    <div
      onClick={() => setHomeSheetOpenState({ newRoomVisible: true, startRoomVisible: false })}
      className={style.card}>
      <h5>{header}</h5>
      <h3>{subHeader}</h3>
      <div className={style.infoContainer}>
        <div className={style.images}>
          {images.map((image, i) => (<img key={i} className={style.user} src={image} alt="userImage" />))}
        </div>
        <div className={style.info}>
          {names.map((user, i) => (
            <p key={i}>{user} <FaRegCommentDots /> </p>
          ))}
          <span className={style.roomInfo}>{inRoom} <BsFillPersonFill /> / {comments} <FaCommentDots /> </span>
        </div>
      </div>
    </div>
  )
}

export default Card