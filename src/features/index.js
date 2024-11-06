import postsSlice from "./post/postSlice"
import userReducer from "./user/userSlice"
import { combineReducers } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsSlice
})

export default rootReducer 