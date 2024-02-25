'use client'
import { configureStore } from "@reduxjs/toolkit"
import favoritesSlice from "./slices/favorites"
import counterSlice from "./slices/counter"

const reduxStore = configureStore({
    reducer: {
        favorites:favoritesSlice,
        counter:counterSlice,
    }
})

export const store = reduxStore