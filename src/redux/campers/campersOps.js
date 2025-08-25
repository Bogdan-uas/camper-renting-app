import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../api/axiosInstance";

export const fetchCampers = createAsyncThunk(
    "campers/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await instance.get("/campers");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const fetchCamperById = createAsyncThunk(
    "campers/fetchById",
    async (id, { rejectWithValue }) => {
        try {
            const response = await instance.get(`/campers/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const fetchFilteredCampers = createAsyncThunk(
    "campers/fetchFiltered",
    async (filters, { rejectWithValue }) => {
        try {
            const params = new URLSearchParams();

            if (filters.location) params.append("location", filters.location);

            if (filters.vehicleType) params.append("form", filters.vehicleType.toLowerCase());

            if (filters.equipment?.length) {
                filters.equipment.forEach(eq => {
                    switch (eq) {
                        case "AC":
                            params.append("AC", true);
                            break;
                        case "TV":
                            params.append("TV", true);
                            break;
                        case "Kitchen":
                            params.append("kitchen", true);
                            break;
                        case "Bathroom":
                            params.append("bathroom", true);
                            break;
                        case "Automatic":
                            params.append("transmission", "automatic");
                            break;
                        default:
                            break;
                    }
                });
            }

            const response = await instance.get(`/campers?${params.toString()}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);