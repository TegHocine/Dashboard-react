import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { usefulItems, listsItems, userItems } from './SidebarItems'
import DarkMode from '../darkmode/DarkMode'

import DashboardIcon from '@mui/icons-material/Dashboard'

import './SideBar.scss'

const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showSidebar = () => {
    setIsVisible(!isVisible)
  }
  const hideSidebar = () => {
    setIsVisible(false)
  }
  return (
    <div className={`sidebar ${isVisible && 'show-sidebar'}`}>
      <button
        className={`sidebar-bg ${isVisible && 'active'}`}
        onClick={hideSidebar}></button>

      <div className='sidebar__top'>
        <Link to='/' onClick={showSidebar}>
          <span className='logo'>Admin</span>
        </Link>
        <button
          className={`button ${isVisible && ' active'}`}
          onClick={showSidebar}>
          <span className={`buger ${isVisible && ' bugerOne'}`}></span>
          <span className={`buger ${isVisible && ' bugerTwo'}`}></span>
          <span className={`buger ${isVisible && ' bugerThree'}`}></span>
        </button>
      </div>
      <div className='sidebar__center'>
        <ul>
          <h3 className='title'>Main</h3>
          <li>
            <Link to='/' className='links' onClick={showSidebar}>
              <DashboardIcon className='icons' /> Dashboard
            </Link>
          </li>
          <h3 className='title'>Lists</h3>

          {listsItems.map((listsItem, i) => (
            <li key={i}>
              <Link to={listsItem.link} className='links' onClick={showSidebar}>
                {listsItem.icon} {listsItem.title}
              </Link>
            </li>
          ))}

          <h3 className='title'>Useful</h3>
          {usefulItems.map((usefulItem, i) => (
            <li key={i}>
              <Link
                to={usefulItem.link}
                className='links'
                onClick={showSidebar}>
                {usefulItem.icon} {usefulItem.title}
              </Link>
            </li>
          ))}

          <h3 className='title'>User</h3>

          {userItems.map((userItem, i) => (
            <li key={i}>
              <Link to={userItem.link} className='links' onClick={showSidebar}>
                {userItem.icon} {userItem.title}
              </Link>
            </li>
          ))}

          <h3 className='title'>Theme</h3>
          <li>
            <div className='links'>
              <DarkMode type={'default'} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
