import React, { useState } from 'react'
import RoomCard from '../components/RoomCard'
import DailyCard from '../components/DailyCard'
import Header from '../components/Header'
import roomData from '../data/rommCards.json'
import style from '../style/pages-styles/home.module.css'
import SwipeableSheet from '../components/SwipeableSheet'
import Spinner from '../components/Spinner'
import { FiSend } from 'react-icons/fi'


const Home = () => {
  const [openState, setHomeSheetOpenState] = useState({
    newRoomVisible: false,
    startRoomVisible: false
  });
  const [loader, setLoader] = useState(false);

  return (
    <>
      {loader ? (
        <Spinner/>
      ) : ("")}
      <main className={style.home}>
        <Header />
        <DailyCard />
        {roomData.map(room => (
          <RoomCard
            key={room.id}
            header={room.header}
            subHeader={room.subHeader}
            names={room.names}
            images={room.images}
            comments={room.comments}
            inRoom={room.inRoom}
            setHomeSheetOpenState={setHomeSheetOpenState}
          />
        )
        )}
        <div className={style.actionBtns}>
          <button
            onClick={() => setHomeSheetOpenState(p => ({ ...p, startRoomVisible: !p.startRoomVisible }))}>
            <img src='/images/plus.svg' alt='start a room' /> Start a Room</button>
          <button><FiSend/><span className={style.redDot}></span></button>
        </div>
      </main>
      <SwipeableSheet
        sheetTitle="start room"
        visible={openState.startRoomVisible}
        setHomeSheetOpenState={setHomeSheetOpenState}
        setLoader={setLoader}
      />
      <SwipeableSheet
        sheetTitle="new room"
        visible={openState.newRoomVisible}
        setHomeSheetOpenState={setHomeSheetOpenState}
      />
    </>

  )
}

export default Home