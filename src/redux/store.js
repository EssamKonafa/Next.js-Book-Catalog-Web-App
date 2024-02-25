'use client'
import { configureStore } from "@reduxjs/toolkit"
import favoritesSlice from "./slices/favorites"
import counterSlice from "./slices/counter"

//handling and setting the store and passing all of the reducers
const reduxStore = configureStore({
    reducer: {
        favorites:favoritesSlice,
        counter:counterSlice,
    }
})

export const store = reduxStore