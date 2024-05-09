import userReducer from "./user/userSlice"
import { combineReducers } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer 