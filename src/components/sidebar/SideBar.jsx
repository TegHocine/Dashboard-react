import React from 'react'
import { Link } from 'react-router-dom'

import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import StoreIcon from '@mui/icons-material/Store'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

import './SideBar.scss'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <Link to='/'>
          <span className='logo'>Admin</span>
        </Link>
      </div>
      <div className='sidebar__center'>
        <ul>
          <h3 className='title'>Main</h3>
          <li>
            <Link to='/' className='links'>
              <DashboardIcon className='icons' /> Dashboard
            </Link>
          </li>
          <h3 className='title'>Lists</h3>
          <li>
            <Link to='/users' className='links'>
              <PersonIcon className='icons' /> Users
            </Link>
          </li>
          <li>
            <Link to='/products' className='links'>
              <StoreIcon className='icons' /> Products
            </Link>
          </li>
          <li>
            <Link to='#' className='links'>
              <CreditCardIcon className='icons' /> Orders
            </Link>
          </li>
          <li>
            <Link to='#' className='links'>
              <LocalShippingIcon className='icons' /> Delivery
            </Link>
          </li>
          <h3 className='title'>Useful</h3>
          <li>
            <Link to='#' className='links'>
              <InsertChartIcon className='icons' /> Stats
            </Link>
          </li>
          <li>
            <Link to='#' className='links'>
              <NotificationsIcon className='icons' /> Notification
            </Link>
          </li>
          <h3 className='title'>User</h3>
          <li>
            <Link to='#' className='links'>
              <AccountCircleIcon className='icons' /> Profile
            </Link>
          </li>
          <li>
            <Link to='#' className='links'>
              <LogoutIcon className='icons' /> Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className='sidebar__bottom'>theme</div>
    </div>
  )
}

export default SideBar
