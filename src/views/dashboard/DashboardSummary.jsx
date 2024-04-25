import React from 'react'
import { DashboardSideBar } from '../../components'

function DashboardSummary() {
  return (
    <div className='bg-green d-flex'>
      <DashboardSideBar />
      <div className='dash-content'>
        summary
      </div> 
    </div>
  )
}

export default DashboardSummary