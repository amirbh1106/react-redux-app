import { createSlice } from '@reduxjs/toolkit'



export const userslice = createSlice({
    name: 'user',
    initialState: {
        user:{
      username: "",
      phonenumber : "",
      password: "",
        }
    },
    reducers: {
      addnewuser: (state, action) => {
        state.user =  action.payload
      },
    },
  })
  


  export const {addnewuser } = userslice.actions
export default userslice.reducer;