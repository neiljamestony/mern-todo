import { configureStore } from '@reduxjs/toolkit'
import authSlice from './redux-reducer/authSlice'

export const store = configureStore({
    reducer:{
        auth: authSlice
    }
})