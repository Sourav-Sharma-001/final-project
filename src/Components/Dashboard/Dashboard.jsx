import React from 'react'
import "./Dashboard.css"
import Sidebar from './Sidebar/Sidebar'
import Overview from './Overview/Overview'

export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div className='sidebar-container'>
        <Sidebar/>
      </div>
      <div className='overview-container'>
        <Overview/>
      </div>
    </div>
  )
}
