import React from 'react'

import NavBar from '../../components/navbar/NavBar'
import Widget from '../../components/widget/Widget'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Table from '../../components/table/Table'

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import SearchIcon from '@mui/icons-material/Search'

import './Home.scss'

const Home = () => {
  console.log(document.documentElement.classList)
  return (
    <div className='home'>
      <div className='home__container'>
        <NavBar />
        <div className='search-container section'>
          <div className='search-container__search'>
            <input
              type='search'
              placeholder='Search...'
              className='search-input'
            />
            <SearchIcon className='search-icon' />
          </div>
        </div>
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
        <div className='charts-container section'>
          <Featured />
          <Chart title={'Last 6 Months (Revenue)'} aspect={2 / 1} />
        </div>
        <div className='table-container section'>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home
