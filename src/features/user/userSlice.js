import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/helplineApi";
import ChatService from "../../services/chatService";

const initialState = {
  token: "",
  user: {
    id: "",
    name: "",
    email: "",
    document: "",
    address: {
      state: "",
      street: "",
      number: "",
      complement: "",
      city: "",
      zipCode: "",
      neighborhood: "",
    },
    messages: [],
    notifications: []
  },
}

export const login = createAsyncThunk("user/auth", async (body) => {
  try {
    const response = await api
      .post(`/auth/login`, body)
      .then((res) => res.data);

    if (response === undefined) throw new Error();
    return response;
  } catch (e) {
    if (e.response.status === 404) {
      return {
        errors: ["E-mail ou senha inválidos"],
        success: false,
        token: "",
      };
    }

    return {
      errors: ["Erro inesperado"],
      success: false,
      token: "",
    };
  }
});

export const register = createAsyncThunk(
  'user/register',
  async (body) => {
    try {
      debugger
      const response = await api
        .post('/auth/register', body)
        .then(res => res.data)

      return response;
    } catch (e) {
      return e;
    }
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addMessage:(state, action)=>{
      state.messages.push(action.payload)
    },

    setMessage:(state, action)=>{
      state.messages = action.payload
    },
    addNotification:(state, action)=>{
      state.notifications.push(action.payload)
    },
    clearNotifications:(state)=>{
      state.notifications = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        sessionStorage.setItem('hltoken', action.payload.token)
        api.interceptors.request.use(config => {
          config.headers.Authorization = `Bearer ${action.payload.token}`;
          return config;
        });
        ChatService.instance.connect();
      })
  }
})

export const selectUser = (state) => state.user.user;

export const selectMessages = (state) => state.user.messages;

export const selectNotifications = (state) => state.user.notifications;

export const selectToken = (state) => state.user.token

export const {addMessage, setMessage, addNotification, clearNotifications} = userSlice.actions;

export default userSlice.reducer