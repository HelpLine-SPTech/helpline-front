
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginView, RegisterView, RegisterUser, RegisterOng, JobAdd, JobList, JobDetails, JobEdit, DashboardSummary, TelaHome, TelaHelpline, TelaVoluntariado,  } from './views'
import Financial from './views/dashboard/financial/Financial'
import { Counter } from './features/counter/Counter'

function HelpLineRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginView />} />
          <Route path='/forum' element={<Counter />} />
          <Route path='/register'>
            <Route path='/register' element={<RegisterView />} />
            <Route path='/register/user' element={<RegisterUser />} />
            <Route path='/register/ong' element={<RegisterOng />} />
          </Route>
          <Route path='/dashboard'>
            <Route path='/dashboard' element={<DashboardSummary />} />
            <Route path='/dashboard/financial' element={<Financial />} />
            <Route path='/dashboard/jobs'>
              <Route path='/dashboard/jobs/list' element={<JobList />} />
              <Route path='/dashboard/jobs/add' element={<JobAdd />} />
              <Route path='/dashboard/jobs/:jobId' element={<JobDetails />} />
              <Route path='/dashboard/jobs/:jobId/edit' element={<JobEdit />} />
            </Route>
          </Route>
          <Route path='/institucional'>
            <Route path='/institucional' element={<TelaHome />} />
            <Route path='/institucional/us' element={<TelaHelpline />} />
            <Route path='/institucional/volunteer' element={<TelaVoluntariado />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default HelpLineRoutes