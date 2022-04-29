import React, { useState, useLayoutEffect } from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import './DarkMode.scss'

const DarkMode = ({ type }) => {
  const [isDark, setIsDark] = useState(() => localStorage.theme === 'dark')

  useLayoutEffect(() => {
    const html = document.documentElement.classList
    const prevTheme = isDark ? 'light' : 'dark'
    html.remove(prevTheme)
    const nextTheme = isDark ? 'dark' : 'light'
    html.add(nextTheme)
    localStorage.setItem('theme', nextTheme)
  }, [isDark])

  const toggle = () => {
    setIsDark(!isDark)
  }
  const light = () => {
    setIsDark(false)
  }
  const dark = () => {
    setIsDark(true)
  }

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
