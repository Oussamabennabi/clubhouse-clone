import React from 'react'
import Header from '../components/Header'
import data from '../data/userData.json'
import style from '../style/pages-styles/profile.module.css'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
const Profile = () => {

  return (
    <main>
      <Header title="PROFILE" />
      <img className={style.profileImage} src={data.imageUrl} alt="user" />
      <h2 className={style.username}>{data.firstName}{" "}{data.lastName}</h2>
      <h6 className={style.bio}>{data.bio}</h6>
      <div className='d-flex justify-content-start gap-5 align-items-center' >
        <p style={{ color: "#aaaaaa"}}><span style={{color:"black",fontSize:"1.2em" ,paddingRight:".5em"}}>{data.followers}</span>followers</p>
        <p style={{ color: "#aaaaaa" }}><span style={{ color: "black", fontSize: "1.2em" ,paddingRight:".5em"}}>{data.following}</span>following</p>
      </div>
      <button className={style.btn}>Add a bio</button>
      
      <div className='d-flex justify-content-start gap-4 align-items-center'>
        <button className={style.btn}><span><BsTwitter /></span>Add Twitter</button>
        <button className={style.btn}><span><BsInstagram/></span>Add Instagram</button>
      </div>

      <div className={style.infoCard}>
        <img src={data.imageUrl} alt="user" />
        <div>
          <h6>Joined {data.dateOfJoin}</h6>
          <h6>Nominated by <span>{data.nominateName}</span></h6>
        </div>
      </div>
      <div className={style.clubs}>
        <div className={style.addClube}>+</div>
        <div className={style.club}>
          <img src={data.imageUrl} alt="user" />
        </div>
        <div className={style.club}>
          <img src={data.imageUrl} alt="user" />
        </div>
        <div className={style.club}>
          <img src={data.imageUrl} alt="user" />
        </div>
        <div className={style.club}>
          <img src={data.imageUrl} alt="user" />
        </div>
        <div className={style.club}>
          <img src={data.imageUrl} alt="user" />
        </div>
      </div>


    </main>
  )
}

export default Profile