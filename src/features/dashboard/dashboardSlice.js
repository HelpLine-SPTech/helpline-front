import { createAsyncThunk } from "@reduxjs/toolkit"
import api from '../../api/helplineApi'

export const getSummary = createAsyncThunk(
  'dashboard/summary',
  async () => {
    const response = await api
      .get(`/dashboard`, )
      .then(res => res.data)
    return response;
  }
)

export const getReport = createAsyncThunk(
  'dashboard/financial',
  async() =>{
    const response = await api
      .get(`/donations/report`,{
        responseType: 'blob'
      } )
      .then(res => res)
      return response
  }
)