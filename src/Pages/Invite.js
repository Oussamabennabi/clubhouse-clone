
import style from '../style/pages-styles/invite.module.css'
import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const Invite = () => {
  const [value, setValue] = useState('');
  console.log(value)
  return (
    <div className={style.inviteContainer}>
      <Arrow link="/"/>
      <h1>Enter your phone #</h1>
      <PhoneInput
        country='us'
        value={value}
        onChange={setValue}
        inputClass={style.phoneInput}	
        buttonClass={style.arrow}
        dropdownClass={style.dropDown}
        enableSearch
      />
      <p>By entering your number,you're greeing to our Terms of Service and Privacy Policy,Thank's</p>
      <Link exact to="/recive_code" className='primaryButton'>
        Next
      </Link>
      </div>
  )
}

export default Invite