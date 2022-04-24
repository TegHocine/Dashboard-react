import React from 'react'

import ProgressBar from '../progressbar/ProgressBar'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'

import './Featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featured__top'>
        <h2 className='title'>Total Revenue</h2>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className='featured__bottom'>
        <div className='chartbar'>
          <ProgressBar value={50} strokeWidth='1.5' />
        </div>
        <p className='title'>Total sales made today</p>
        <p className='amount'>$420</p>
        <p className='desc'>
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownIcon fontSize='small' />
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
