import React, { useEffect, useState } from 'react'

const ProgressBar = ({ value, strokeWidth }) => {
  const [progress, setProgress] = useState('')
  useEffect(() => {
    const Percentage = (value * 100) / 100 / 100
    const oneMinus = 1 - Percentage
    const barProgress = oneMinus * 2 * 10 * Math.PI
    setProgress(barProgress)
  }, [value])

  const styleContainer = {
    position: 'relative',
    transform: 'rotate(-90deg)',
    width: `100%`,
    height: `100%`
  }

  const styleText = {
    position: 'absolute',
    transform: 'rotate(90deg)',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#00ba7c'
  }

  const styleCircleOne = {
    stroke: 'rgba(160, 160, 160, 0.4)'
  }
  return (
    <div style={styleContainer}>
      <h1 style={styleText}>{`${value}%`}</h1>
      <svg
        height='100%'
        style={{ overflow: 'visible' }}
        viewBox='0 0 20 20'
        width='100%'>
        <circle
          cx='50%'
          cy='50%'
          fill='none'
          strokeWidth={strokeWidth}
          r='10'
          style={styleCircleOne}></circle>
        <circle
          cx='50%'
          cy='50%'
          fill='none'
          strokeWidth={strokeWidth}
          r='10'
          strokeLinecap='round'
          style={{
            strokeDasharray: `${2 * 10 * Math.PI}px`,
            strokeDashoffset: `${progress}px`,
            stroke: '#00ba7c'
          }}></circle>
      </svg>
    </div>
  )
}

export default ProgressBar
