import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/helplineApi";

const initialState = {
  token: "",
  user: {
    id: "",
    profilePicUrl: '',
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

export const getUserByid = createAsyncThunk("user/getUserById", async (body) => {
  try {
    const response = await api
      .get(`/auth/${body.id}`)
      .then((res) => res.data);

    return response;
  } catch (e) {
    return e;
  }
});

export const uploadProfilePic = createAsyncThunk("user/profile", async (body) => {
  try {
    const response = await api
      .patch(`/auth/profile`,body)
      .then((res) => res.data);

    return response;
  } catch (e) {
    return e;
  }
});

export const updateUserName = createAsyncThunk('user/update', async (body) => {
  try {
    const response = await api
      .put(`/auth/${body.id}`)
      .then(res => res.data)

    return response
  } catch(e) {
    return e;
  }
})

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateProfilePicUrl: (state, action) => {
      state.user.profilePicUrl = action.payload
    }
  },
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

export const { updateProfilePicUrl } = userSlice.actions;

export default userSlice.reducer;
