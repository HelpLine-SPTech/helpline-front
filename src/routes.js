
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginView, JobAdd, JobList, JobDetails, JobEdit, DashboardSummary } from './views'
import Financial from './views/dashboard/financial/Financial'

function HelpLineRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginView />} />
          <Route path='/forum' element={<LoginView />}/>
          <Route path='/dashboard'>
            <Route path='/dashboard' element={<DashboardSummary />} />
            <Route path='/dashboard/financial' element={<Financial />}/>
            <Route path='/dashboard/jobs'>
              <Route path='/dashboard/jobs/list' element={<JobList />} />
              <Route path='/dashboard/jobs/add' element={<JobAdd />} />
              <Route path='/dashboard/jobs/:jobId' element={<JobDetails />}/>
              <Route path='/dashboard/jobs/:jobId/edit' element={<JobEdit />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default HelpLineRoutes