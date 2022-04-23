import React from 'react'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import style from '../style/component-styles/swipeableSeet.module.css'
import NewRoom from './bottom_sheet/NewRoom';
import NotificationSheet from './bottom_sheet/NotificationSheet';
import StartRoom from './bottom_sheet/StartRoom';
import UpcommingSheet from './bottom_sheet/UpcommingSheet';
const SwipeableSheet = ({
  sheetTitle,
  setHomeSheetOpenState,
  setUpcommingSheetOpenState,
  setSelectedTopic,
  selectedTopic,
  visible,
  notificationCardId,
  setLoader
}) => {
  return (
    <SwipeableBottomSheet
      open={visible}
      onChange={() => {
        if (sheetTitle === "new room" || sheetTitle === "start room") {

          setHomeSheetOpenState(_ => {
            if (sheetTitle === "start room")
              return {
                newRoomVisible: false,
                startRoomVisible: false
              }
            if (sheetTitle === "new room")
              return {
                newRoomVisible: false,
                startRoomVisible: true
              }
          })

        }
        else if (sheetTitle === "notification sheet" || sheetTitle === "upcomming sheet") {
          setUpcommingSheetOpenState(_ => {
            if (sheetTitle === "notification sheet")
              return {
                roomVisible: true,
                upcommingVisible: false
              }
            if (sheetTitle === "upcomming sheet")
              return {
                newRoomVisible: false,
                upcommingVisible: false
              }
          })
        }
      }}
      fullScreen={sheetTitle === "new room" ? true : false}>

      <div
        className={`
        ${style.bottomSheetContainer}
        ${sheetTitle === "new room" ? style.newRoom :
            sheetTitle === "notification sheet" ? style.notificationSheet :
              sheetTitle === "upcomming sheet" ? style.upcommingSheet :
                ""
          }`}
      >
        {sheetTitle === "new room" ? (
          <NewRoom
            setHomeSheetOpenState={setHomeSheetOpenState}
          />
        ) : sheetTitle === "start room" ? (
          <StartRoom
            setHomeSheetOpenState={setHomeSheetOpenState}
            setLoader={setLoader}
          />
        ) : sheetTitle === "notification sheet" ? (
          <NotificationSheet
            id={notificationCardId}
          />
        ) : sheetTitle === "upcomming sheet" ? (
          <UpcommingSheet
                  setSelectedTopic={setSelectedTopic}
                  selectedTopic={selectedTopic}
                  setLoader={setLoader}
          />
        ) : ("")}
      </div>
    </SwipeableBottomSheet>
  )
}

export default SwipeableSheet