import React from 'react'
import data from '../data/dailyCard.json'
import style from '../style/component-styles/dailyCard.module.css'
const DailyCard = () => {
  return (
    <div className={style.dailyCard}>
      {data.map((data, i) => (
        <div key={i} className={style.singleCard}>
          <p>{data.time}</p>

          <h5><span>{data.title}</span><br />{data.description}</h5>
        </div>
      ))}
    </div>
  )
}

export default DailyCard