import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/helplineApi";

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
  },
};

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

export const register = createAsyncThunk("user/register", async (body) => {
  try {
    const response = await api
      .post("/auth/register", body)
      .then((res) => res.data);

    return response;
  } catch (e) {
    return e;
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
      sessionStorage.setItem("hltoken", action.payload.token);
      api.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${action.payload.token}`;
        return config;
      });
    });
  },
});

export const selectUser = (state) => state.user.user;

export const selectToken = (state) => state.user.token;

export default userSlice.reducer;
