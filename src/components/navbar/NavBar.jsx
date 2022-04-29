import React from 'react'

import DarkMode from '../darkmode/DarkMode'

import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'

import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='navbar section'>
      <div className='navbar__search'>
        <input type='search' placeholder='Search...' className='search-input' />
        <SearchIcon className='search-icon' />
      </div>
      <div className='navbar__items'>
        <div className='item-language item'>
          <LanguageIcon className='item-icon' /> English
        </div>
        <div className='item-theme item'>
          <DarkMode type={'toggle'} />
        </div>
        <div className='item-notif item'>
          <NotificationsIcon className='item-icon' />
          <span className='nbr-notif'>1</span>
        </div>
        <div className='item-msg item'>
          <ChatBubbleIcon className='item-icon' />
          <span className='nbr-notif'>2</span>
        </div>
        <div className='item-avatar item'>
          <img
            src='https://www.avcesar.com/source/actualites/00/00/59/5A/avatar-2-3-4-et-5-tournage-simultane-et-budget-d1-milliard-de-dollars_09162918.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default NavBar
