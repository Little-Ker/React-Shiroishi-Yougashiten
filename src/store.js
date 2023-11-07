import {
  configureStore 
} from '@reduxjs/toolkit'

import navbarColor from './redux/navbarColorSlice'
import showBanner from './redux/showBannerSlice'

export const store = configureStore({
  reducer: {
    navbarColor: navbarColor,
    showBanner: showBanner,
  },
})