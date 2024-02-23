'use client'
import { configureStore } from "@reduxjs/toolkit"
import favoritesSlice from "./slices/favorites"

const reduxStore = configureStore({
    reducer: {
        favorites:favoritesSlice
    }
})

export const store = reduxStore