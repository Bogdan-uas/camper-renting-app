import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    draft: {
        equipment: [],
        vehicleType: "",
        location: "",
    },
    applied: {
        equipment: [],
        vehicleType: "",
        location: "",
    },
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        toggleDraftEquipment(state, action) {
            const eq = action.payload;
            if (state.draft.equipment.includes(eq)) {
                state.draft.equipment = state.draft.equipment.filter(item => item !== eq);
            } else {
                state.draft.equipment.push(eq);
            }
        },
        setDraftVehicleType(state, action) {
            state.draft.vehicleType = action.payload;
        },
        setDraftLocation(state, action) {
            state.draft.location = action.payload;
        },

        applyFilters(state) {
            state.applied = { ...state.draft };
        },

        resetFilters(state) {
            state.draft = { equipment: [], vehicleType: "", location: "" };
            state.applied = { equipment: [], vehicleType: "", location: "" };
        }
    },
});

export const {
    toggleDraftEquipment,
    setDraftVehicleType,
    setDraftLocation,
    applyFilters,
    resetFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;