import React from 'react'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

import './Chart.scss'

const data = [
  { name: 'January', revenue: 1200 },
  { name: 'February', revenue: 2100 },
  { name: 'March', revenue: 800 },
  { name: 'April', revenue: 1600 },
  { name: 'May', revenue: 900 },
  { name: 'June', revenue: 1700 }
]

const Chart = ({ title, aspect }) => {
  return (
    <div className='chart'>
      <h3 className='chart__title'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id='revenue' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#bc5090' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#bc5090' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='revenue'
            stroke='#bc5090'
            fillOpacity={1}
            fill='url(#revenue)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
