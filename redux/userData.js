import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    name: '',
    flight: '',
    dateString: 'Enter Flight Date',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setFlight: (state, action) => {
      state.flight = action.payload
    },
    setDateString: (state, action) => {
        state.dateString = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setName, setFlight, setDateString } = userDataSlice.actions

export default userDataSlice.reducer