import React, { useState } from 'react'
import Header from '../components/Header'
import style from '../style/pages-styles/upcomming.module.css'
import data from '../data/upcommingData.json'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import SwipeableSheet from '../components/SwipeableSheet'
import Spinner from '../components/Spinner'
const Upcomming = () => {
  const [visible, setUpcommingSheetOpenState] = useState({
    notificationVisible: false,
    upcommingVisible: false
  })
  const [selectedTopic, setSelectedTopic] = useState('UPCOMMING FOR YOU')
  const [cardId, setCardId] = useState(0)
  const [loader, setLoader] = useState(false);
  return (
    <>
      <main >

        {loader ? (
          <Spinner />
        ) : ("")}
        <Header
          title={selectedTopic}
          setUpcommingSheetOpenState={setUpcommingSheetOpenState}
        />
        { !loader && (selectedTopic === "UPCOMMING FOR YOU") ?
          (<>
            <h5 className={style.dataTitle}>TODAY</h5>
            <div className={style.cardsContainer}>
            {data.map(d => (
              <div
                key={d.id}
                className={style.card}>
                <div className={style.cardHeader}>
                  <span>{d.time}</span>

                  <MdOutlineNotificationsNone />


                </div>

                <div
                  onClick={() => {
                    setCardId(d.id)
                    setUpcommingSheetOpenState({
                      notificationVisible: true,
                      upcommingVisible: false
                    })
                  }}
                >
                  <h3>{d.title}</h3>
                  <div className={style.images}>
                    {d.images.map((img, i) => (
                      <img src={img} alt={`user ${i}`} />
                    ))}
                  </div>
                  <p>{d.description}</p>
                </div>
              </div>
            ))}
            </div>
          </>) : !loader && (selectedTopic === "MY EVENTS") ?(
            // here goes the event section
            <p style={{ marginTop: "40vh"}}>There are no Upcomming events.<br/>Add one! </p>
          ):""}
      </main>
      <SwipeableSheet
        visible={visible.notificationVisible}
        sheetTitle="notification sheet"
        setUpcommingSheetOpenState={setUpcommingSheetOpenState}
        notificationCardId={cardId}
      />

      <SwipeableSheet
        visible={visible.upcommingVisible}
        sheetTitle="upcomming sheet"
        setSelectedTopic={setSelectedTopic}
        selectedTopic={selectedTopic}
        setUpcommingSheetOpenState={setUpcommingSheetOpenState}
        notificationCardId={cardId}
        setLoader={setLoader}
      />
    </>

  )
}

export default Upcomming