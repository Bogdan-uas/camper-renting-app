import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCampers, getCamperById } from "./campersApi";

export const fetchCampers = createAsyncThunk(
    "campers/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            return await getCampers();
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const fetchCamperById = createAsyncThunk(
    "campers/fetchById",
    async (id, { rejectWithValue }) => {
        try {
            return await getCamperById(id);
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);