import React, { useContext } from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import { darkmodeContext } from '../../context/ThemeContext'

import './DarkMode.scss'

const DarkMode = ({ type }) => {
  const { isDark, toggle, light, dark } = useContext(darkmodeContext)

  return (
    <div className='darkmod'>
      {type === 'toggle' ? (
        <div className={`type-toggle`} onClick={toggle}>
          <span className={`toggle-icon ${isDark && 'dark'}`}>
            {isDark ? (
              <DarkModeIcon className='icon' />
            ) : (
              <Brightness7Icon className='icon' />
            )}
          </span>
        </div>
      ) : (
        <div className='type-theme'>
          <div className='themes light' onClick={light}></div>
          <div className='themes dark' onClick={dark}></div>
        </div>
      )}
    </div>
  )
}

export default DarkMode
