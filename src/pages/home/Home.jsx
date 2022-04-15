import React from 'react'

import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import Widget from '../../components/widget/Widget'

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'

import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className='home__container'>
        <NavBar />
        <div className='widget-container section'>
          <Widget title={'users'} link='#!' data={100} color='blue'>
            <PersonOutlineOutlinedIcon />
          </Widget>
          <Widget title={'orders'} link='#!' data={100} color='yellow'>
            <ShoppingCartOutlinedIcon />
          </Widget>
          <Widget title={'EarNings'} link='#!' data={'$100'} color='orange'>
            <PaidOutlinedIcon />
          </Widget>
          <Widget title={'balance'} link='#!' data={'$100'} color='pink'>
            <AccountBalanceWalletOutlinedIcon />
          </Widget>
        </div>
        <div className='section'>home </div>
      </div>
    </div>
  )
}

export default Home
