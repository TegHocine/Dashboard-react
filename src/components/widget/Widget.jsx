import React from 'react'
import { Link } from 'react-router-dom'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import './Widget.scss'

const Widget = ({ title, children, link, data, color }) => {
  return (
    <div className='widget'>
      <div className='widget__left'>
        <div className='title'> {title ? title.toUpperCase() : 'TITLE'} </div>
        <div className='count'>{data ? data : 'Data to show'}</div>
        <Link to={link ? link : '#'} className='see-all'>
          See all {title ? title.toLowerCase() : 'title'}
        </Link>
      </div>
      <div className='widget__right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon /> 20%
        </div>
        <div className={`icon ${color && color}`}>
          {children ? children : 'Icon'}
        </div>
      </div>
    </div>
  )
}

export default Widget
