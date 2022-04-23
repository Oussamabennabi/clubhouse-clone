import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/pages-styles/reciveCode.module.css'
import Arrow from '../components/Arrow'
const ReciveCode = () => {
  return (
    <div className={style.ReciveCodeContainer}>
      <Arrow link="/invite"/>
      <div>
        <h1 >Enter the code we just texted you</h1>
        <form>
          <input placeholder='Enter your code' type="text" style={{textAlign:"center"}}/>
        </form>
        <small>Didn't recive it? <button><b>Tap to resend</b></button></small>
      </div>
      <Link exact to="/allow_notifications" className='primaryButton'>Next</Link>
    </div>
  )
}

export default ReciveCode