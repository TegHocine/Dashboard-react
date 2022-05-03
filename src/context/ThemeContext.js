import React, { createContext, useEffect, useState } from 'react'

export const darkmodeContext = createContext()

const ThemeContext = (props) => {
  const [isDark, setIsDark] = useState(() => localStorage.theme === 'dark')

  useEffect(() => {
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
    <darkmodeContext.Provider
      value={{
        isDark,
        toggle,
        light,
        dark
      }}>
      {props.children}
    </darkmodeContext.Provider>
  )
}

export default ThemeContext
