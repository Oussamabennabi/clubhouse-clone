import React from 'react'
import style from '../../style/component-styles/swipeableSeet.module.css'
import { AiOutlineCheck } from 'react-icons/ai'
const UpcommingSheet = ({ setSelectedTopic, selectedTopic, setLoader }) => {
  return (
    <>
      <div className={style.switchLine}></div>

      <h5>What would you like to see?</h5>

      <button
        onClick={() => {
          setLoader(true)
          setTimeout(() => {
            setLoader(false)
          }, 600);
          setSelectedTopic("UPCOMMING FOR YOU")
        }}
      >Upcomming for you
        {selectedTopic === "UPCOMMING FOR YOU" && <AiOutlineCheck />}
      </button>
      <button
        onClick={() => {
          setLoader(true)
          setTimeout(() => {
            setLoader(false)

          }, 600);
          setSelectedTopic("MY EVENTS")
        }}
      >My events
        {selectedTopic === "MY EVENTS" && <AiOutlineCheck />}
        
      </button>

    </>
  )
}

export default UpcommingSheet