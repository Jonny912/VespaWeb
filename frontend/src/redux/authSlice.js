import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    isRefreshing: false,
    token: null,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
       setIsLoggedIn(state, {payload}) {
        state.isLoggedIn = payload 
       },
       setUser(state, {payload}){
        state.user = payload
       },
       setToken(state, {payload}){
        state.token = payload
       }
    }
})

export const {setIsLoggedIn, setUser, setToken} = authSlice.actions;

export default authSlice.reducer;