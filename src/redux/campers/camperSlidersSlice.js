import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentIndex: 0,
};

const camperSliderSlice = createSlice({
    name: "camperSlider",
    initialState,
    reducers: {
        nextImage: (state, action) => {
            const length = action.payload;
            state.currentIndex = (state.currentIndex + 1) % length;
        },
        prevImage: (state, action) => {
            const length = action.payload;
            state.currentIndex = (state.currentIndex - 1 + length) % length;
        },
        resetSlider: (state) => {
            state.currentIndex = 0;
        },
        setCurrentIndex: (state, action) => {
            state.currentIndex = action.payload;
        },
    },
});

export const { nextImage, prevImage, resetSlider, setCurrentIndex } = camperSliderSlice.actions;
export const camperSliderReducer = camperSliderSlice.reducer;