import {
  configureStore 
} from '@reduxjs/toolkit'

import navbarColor from './redux/navbarColorSlice'

export const store = configureStore({
  reducer: {
    navbarColor: navbarColor,
  },
})