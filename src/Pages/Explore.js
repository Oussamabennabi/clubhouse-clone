import React, { useState } from 'react'
import exploreData from '../data/exploreData.json'
import { DownOutlined, FireOutlined } from '@ant-design/icons'
import style from '../style/pages-styles/explore.module.css'
import Header from '../components/Header'
import { GrSearch } from 'react-icons/gr'
import FollowBtn from '../components/FollowBtn'
import ExploreCard from '../components/ExploreCard'
const Explore = () => {
  const { peoples, conversations } = exploreData
  const [searchValue, setSearchValue] = useState('')
  
  return (
    <main className={style.exploreContainer}>
      <Header title="EXPLORE" />
      <form onSubmit={(e) => e.preventDefault()}>
        <span className={style.searchIcon}><GrSearch /></span>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Find People and Clubs'
          value={searchValue}
        />
      </form>
      <h4 className={style.title}>PEOPLE TO FOLLOW</h4>
      <div className={style.peopleContainer}>
        {peoples.map((person, i) => (
          <div key={i} className={style.personContainer}>
            <img src='/images/user1.png' alt='user' />
            <div className={style.personInfo}>
              <h5>{person.title}</h5>
              <p>{person.description}</p>
            </div>
            <FollowBtn />
          </div>
        ))}
        <button className={style.showMoreBtn}>Show more people <DownOutlined/></button>
      </div>

      <h4 className={style.title}>FIND CONVERSATIONS ABOUT...</h4>
      <section className={style.conversationContainer}>
        {conversations.map((c, i) => (
          <ExploreCard
            key={i}
            icon={<FireOutlined/>}
            title={c.title}
            description={c.description}
          />
        ))}
      </section>
    </main>
  )
}

export default Explore