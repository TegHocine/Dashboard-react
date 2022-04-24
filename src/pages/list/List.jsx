import React from 'react'

import SideBar from '../../components/sidebar/SideBar'
import NavBar from '../../components/navbar/NavBar'
import Datatable from '../../components/datatable/Datatable'

import './List.scss'

const List = () => {
  return (
    <div className='list'>
      <SideBar />
      <div className='list__container'>
        <NavBar />
        <div className='datatable section'>
          <Datatable />
        </div>
      </div>
    </div>
  )
}

export default List
