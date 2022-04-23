import React, { useState } from 'react'
import { FcGlobe } from 'react-icons/fc'
import style from '../../style/component-styles/swipeableSeet.module.css'
const StartRoom = ({ setHomeSheetOpenState, setLoader}) => {
  const [room, setRoom] = useState('open');
  return (
    <>
      <div className={style.switchLine}></div>
      <div>
        <div className={style.addTopicBtn}>

          <button >
            + add a topic
          </button>
        </div>
        <div className={style.selectRoom}>
          <button
            className={room === "open" ? style.active : ""}
            onClick={() => setRoom("open")}
          >
            <div><FcGlobe /></div>
            Open
          </button>
          <button
            className={room === "social" ? style.active : ""}
            onClick={() => setRoom("social")}
          >
            <div><FcGlobe /></div>
            Social
          </button>
          <button
            className={room === "closed" ? style.active : ""}
            onClick={() => setRoom("closed")}
          >
            <div><FcGlobe /></div>
            Closed
          </button>
        </div>
      </div>
      <p>Start a room {" "}
        <span>
          {room === "closed" ? "for people I choose" :
            room === "social" ? "with people I follow" : "open to everyone"}
        </span>
      </p>
      <div className={style.letsGoBtn}>
        <button onClick={() => {
          setLoader(true)
          setHomeSheetOpenState(p => ({ ...p, newRoomVisible: false }))
          setTimeout(() => {
            setLoader(false)
            setHomeSheetOpenState(p => ({ ...p, newRoomVisible: true }))
          }, 500);

        }}>
          🎉Lets go
        </button>
      </div>
    </>
  )
}

export default StartRoom