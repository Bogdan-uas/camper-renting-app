import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTab: "details",
};

const camperTabSlice = createSlice({
    name: "camperTab",
    initialState,
    reducers: {
        setTab: (state, action) => {
            state.activeTab = action.payload;
        },
    },
});

export const { setTab } = camperTabSlice.actions;
export const camperTabReducer = camperTabSlice.reducer;