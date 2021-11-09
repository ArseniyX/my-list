import { configureStore, combineReducers } from "@reduxjs/toolkit"

import uiReducer from "./ui"
import userReducer from "./user"

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
