import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, userReducer } from '../features'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
});
