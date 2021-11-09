import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: {},
}

export const userSplice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      const { payload } = action
      state.user = payload
    },
  },
})

// Reducers
export default userSplice.reducer

// Selectors
export const userSelector = state => state.user

// Actions
export const { setCurrentUser } = userSplice.actions

