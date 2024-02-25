import { createSlice } from "@reduxjs/toolkit";

//redux slice for handling adding or removing favorites
export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload)

        },
        removeFavorite: (state, action) => {
            const bookIdToRemove = action.payload;
            const updatedFavorites = state.favorites.filter((book) => book.id !== bookIdToRemove);
            state.favorites = updatedFavorites;
        },
    }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer