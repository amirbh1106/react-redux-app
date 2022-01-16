
import { configureStore } from '@reduxjs/toolkit'
import  userreducer from "./reducer/user.js"

export default configureStore({
  reducer: {
    user: userreducer,
  },
})

