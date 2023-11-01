import {
  createSlice 
} from '@reduxjs/toolkit'
export const navbarColorSlice = createSlice({
  name: 'changeColor',
  initialState: {
    color: '#002c83',
  },
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload
    },
  },
})
 
export const { changeColor } = navbarColorSlice.actions
export default navbarColorSlice.reducer