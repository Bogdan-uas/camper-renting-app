import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById, fetchFilteredCampers } from "./campersOps";

const initialState = {
    items: [],
    currentCamper: null,
    isLoading: false,
    error: null,
    visibleCount: 4,
    step: 4,
};

const campersSlice = createSlice({
    name: "campers",
    initialState,
    reducers: {
        loadMore(state) {
            state.visibleCount += state.step;
        },
        resetVisibleCount(state) {
            state.visibleCount = state.step;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload.items;
            })
            .addCase(fetchCampers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || "Failed to fetch campers";
            })
            .addCase(fetchCamperById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCamperById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentCamper = action.payload;
            })
            .addCase(fetchCamperById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || "Failed to fetch camper";
            })
            .addCase(fetchFilteredCampers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload.items;
            })
            .addCase(fetchFilteredCampers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || "Failed to fetch campers";
            });
    },
});

export const { loadMore, resetVisibleCount } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;