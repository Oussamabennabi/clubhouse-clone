import React from 'react'
import style from '../style/component-styles/exploreCard.module.css'
const ExploreCard = ({ icon, title, description }) => {
  return (
    <article className={style.exploreCardContainer}>
      <div >{icon}{" "}{title}</div>
      <div>{description}</div>
    </article>
  )
}

export default ExploreCard