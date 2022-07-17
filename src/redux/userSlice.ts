import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
   name: string,
   email: string ,
   password: string 
  };

interface userState{
    user: User | any
}

const initialState: userState = {
    user: null             
} 

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{

        logIn: (state,action: PayloadAction<User>) => {
            state.user = action.payload
        },

        logOut: (state) => {
            state.user = null            
            
        }

    }
})

export const {logIn,logOut} = userSlice.actions

export default userSlice.reducer