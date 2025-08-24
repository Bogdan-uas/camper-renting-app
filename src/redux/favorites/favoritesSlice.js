import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const camperId = action.payload;
            if (state.items.includes(camperId)) {
                state.items = state.items.filter((id) => id !== camperId);
            } else {
                state.items.push(camperId);
            }
        },
        clearFavorites: (state) => {
            state.items = [];
        },
    },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;