import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../Features/Slices/cartSlice'

const store = configureStore({
    reducer : {
        cart : cartReducer
    }
})

export default store;