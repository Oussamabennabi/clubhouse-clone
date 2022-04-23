import React from 'react'
import { NavLink } from 'react-router-dom'

import '../style/component-styles/header.css'

import Arrow from './Arrow'
import { FiSettings } from 'react-icons/fi'
import {BsChevronDown} from 'react-icons/bs'
import { BsUpload } from 'react-icons/bs'
import { HiOutlineAtSymbol } from 'react-icons/hi'
const Header = ({ title, setUpcommingSheetOpenState }) => {
  return (
    title === 'EXPLORE' || title === 'Activity' ? (
      <nav className='explore-header' style={{marginBottom:title=== "Activity" && "2em"}}>
        <Arrow link="/home" />
        <h3>{title}</h3>
      </nav >
    )
      : title === "PROFILE" ? (
        <nav className='profile-header'>
          <Arrow link="/home" />
          <button className='profile-icon'><HiOutlineAtSymbol /></button>
          <button className='profile-icon'><BsUpload /></button>
          <button className='profile-icon'><FiSettings /></button>
        </nav>
      )
        : title === "UPCOMMING FOR YOU" || title === "MY EVENTS" ? (
          <nav className='upcomming-header'>
            <Arrow link="/home"/>
            <h3 onClick={() => setUpcommingSheetOpenState({
              notificationVisible: false,
              upcommingVisible:true
            })}>{title}<BsChevronDown /></h3>
            <button><img src='/images/add-calendar.svg' alt='add event'/></button>
          </nav>
        )
          :
          (
            <nav className='home-header'>
              <NavLink

                className="search-icon" to="/explore">
                <img src='/images/search.svg' alt='search' />
              </NavLink>
              <NavLink

                to="/friends_invite">
                <img src='/images/messages.svg' alt='messages' />
              </NavLink>
              <NavLink
                to="/upcomming">
                <img src='/images/calendar.svg' alt='calendar' />
              </NavLink>
              <NavLink
                to="/activity">
                <img src='/images/notifications.svg' alt='notifications' />
              </NavLink>


              <NavLink
                className="user-icon" to="/profile">
                <img src='/images/user1.png' alt='user' />
              </NavLink>

            </nav>
          )



  )
}

export default Header