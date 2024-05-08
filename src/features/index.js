import userReducer from "./user/userSlice"
import counterReducer from "./counter/counterSlice"
import { combineReducers } from "@reduxjs/toolkit"

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer 