import React from 'react'
import { DashboardSideBar } from '../../../components'

function JobList() {
  return (
    <div className='bg-green d-flex'>
      <DashboardSideBar />
      <div className='dash-content'>
        job list
      </div>
    </div>
  )
}

export default JobList