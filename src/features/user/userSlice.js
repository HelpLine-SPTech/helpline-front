import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { redirect } from 'react-router-dom';
import api from '../../api/helplineApi';

const initialState = {

}

export const login = createAsyncThunk(
  'user/auth',
  async (body) => {
    try {
      const response = await api
        .post(`/auth/login`, body)
        .then(res => res.data)
  
      return response
    } catch(e) {
      console.log(e)
      if(e.response.status === 403) {
        return {
          errors: ["E-mail ou senha inválidos"],
          success: false,
          token: ''
        }
      }

      return {
        errors: ["Erro inesperado"],
        success: false,
        token: ''
      }
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.token)
        if(action.payload.token) {
          redirect('/forum')
        }
      })
  }
})

export const selectUser = (state) => state.user;

export default userSlice.reducer