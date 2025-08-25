import React from 'react'
import "./Dashboard.css"
import Sidebar from './Sidebar/Sidebar'

export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div className='sidebar-container'>
        <Sidebar/>
      </div>
      <div className='overview-container'></div>
    </div>
  )
}
