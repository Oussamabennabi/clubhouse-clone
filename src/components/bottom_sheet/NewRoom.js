import React, { useState } from 'react'
import style from '../../style/component-styles/swipeableSeet.module.css'
import { AiOutlineFile, AiOutlinePlus } from 'react-icons/ai'
import { BsMicMuteFill, BsMicFill } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { FaHandPeace, FaRegHandPaper } from 'react-icons/fa'
import roomMembers from '../../data/roomMembers.json'
const NewRoom = ({ setHomeSheetOpenState }) => {
  const [isMute, setIsMute] = useState(false)
  return (
    <>
      <div className={style.switchLine}></div>

      <div className={style.roomSheetHeader}>
        <div className={style.cursorPointer} onClick={() => setHomeSheetOpenState({ newRoomVisible: false, startRoomVisible: true })}>
          <IoIosArrowDown /> {" "}
          Hallway
        </div>
        <div>
          <AiOutlineFile className={style.cursorPointer} />
          <img className={style.cursorPointer} src="/images/user1.png" alt='user' />
        </div>

      </div>
      <div className={style.roomSheetBody}>
        {roomMembers.map(member => (
          <div
            key={member.id}
            className={`${style.member} ${member.isTalking ? style.talking : ''}`}
          >
            <img src={member.profilePhoto} alt='user' />
            <span className={style.mice}>{isMute ? <BsMicMuteFill /> : <BsMicFill />}</span>
            <p><img src='/images/star.png' alt='starimage' />{member.userName}</p>
          </div>
        ))}
      </div>
      <div className={style.roomSheetFooter}>
        <button
          onClick={() => setHomeSheetOpenState({ newRoomVisible: false, startRoomVisible: false })}
          className={style.leaveBtn}>
          <FaHandPeace/>Leave quietly</button>
        <div className='d-flex gap-3'>
          <button className={style.icon}><AiOutlinePlus/></button>
          <button className={style.icon}><FaRegHandPaper/></button>
          <button className={style.icon} onClick={() => setIsMute(!isMute)}>{
            isMute ?
              <BsMicMuteFill /> :
              <BsMicFill />

          }</button>

        </div>

      </div>
    </>
  )
}

export default NewRoom