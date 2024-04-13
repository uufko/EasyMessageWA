import {configureStore} from '@reduxjs/toolkit'
import NumberSlice from './numberSlice'

export const Store = configureStore({
    reducer:{
        counter: NumberSlice.reducer
    }
})