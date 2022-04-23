import React from 'react'
import { Link } from 'react-router-dom'
import '../style/component-styles/arrow.css'
const Arrow = ({link}) => {
  return (
    <Link exact to={link}>
      <img className='Arrow' src='/images/arrow_back.svg' alt='back to invite page' id='ou' />
    </Link>
  )
}

export default Arrow