import {
  createSlice 
} from '@reduxjs/toolkit'
export const showBannerSlice = createSlice({
  name: 'showBanner',
  initialState: {
    isShow: true,
  },
  reducers: {
    changeShowBanner: (state, action) => {
      state.isShow = action.payload
    },
  },
})
 
export const { changeShowBanner } = showBannerSlice.actions
export default showBannerSlice.reducer