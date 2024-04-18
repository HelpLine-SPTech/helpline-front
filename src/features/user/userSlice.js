import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/helplineApi';

const initialState = {
  token: '',
  authResponse: {
    errors: [],
    token: '',
    success: true 
  }
}

export const login = createAsyncThunk(
  'user/auth',
  async (body) => {
    debugger
    const response = await api
      .post(`/auth/login`, body)

    return response.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // login: async (state, payload) => {
    //   console.log(payload)
    //   let response = await api
    //     .post('/auth/login', payload.payload)
    //     .then(res => res)
    //     .catch(res => res)

    //   console.log(response.data.token)

    //   state.token = response.data.token
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        console.log("Logando")
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("logado")
        state.authResponse = action.payload
        console.log(action.payload)
      })
  }
})

// export const { login } = userSlice.actions

export const selectUser = (state) => state.value;

export default userSlice.reducer