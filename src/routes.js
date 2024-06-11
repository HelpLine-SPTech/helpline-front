
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginView, RegisterView, RegisterUser, RegisterOng, ForumOng, TesteModais, PerfilForum, TelaVagas, JobAdd, JobList, JobDetails, JobEdit, DashboardSummary, TelaHome, TelaHelpline, TelaVoluntariado, TelaOng } from './views'
import Financial from './views/dashboard/financial/Financial'
import { Counter } from './features/counter/Counter'

function HelpLineRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<LoginView />} />
          <Route path='/forum' element={<ForumOng/>}/>
          <Route path='/testeModais' element={<TesteModais/>} />
          <Route path='/perfil' element={<PerfilForum />} />
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
            <Route path='/institucional/telaOng' element={<TelaOng />} />
          </Route>
          <Route path='/voluntario'>
            <Route path='/voluntario/vagas' element={<TelaVagas />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default HelpLineRoutes