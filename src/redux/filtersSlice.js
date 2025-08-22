import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    sortBy: "name",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
        },
        setSortBy(state, action) {
            state.sortBy = action.payload;
        },
    },
});

export const { setSearch, setSortBy } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;