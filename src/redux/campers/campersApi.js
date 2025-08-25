import { instance } from "../api/axiosInstance";

export const getCampers = async () => {
    const response = await instance.get("/campers");
    return response.data;
};

export const getCamperById = async (id) => {
    const response = await instance.get(`/campers/${id}`);
    return response.data;
};

export const getFilteredCampers = async (filters) => {
    const params = {};

    if (filters.form) {
        params.form = filters.form === "van" ? "panelTruck" : filters.form;
    }

    if (filters.location) {
        params.location = filters.location;
    }

    if (filters.transmission === "automatic") {
        params.transmission = "automatic";
    }

    if (filters.equipment && Array.isArray(filters.equipment)) {
        filters.equipment.forEach(eq => {
            if (["AC", "bathroom", "kitchen", "TV"].includes(eq)) {
                params[eq] = true;
            }
        });
    }

    const response = await instance.get("/campers", { params });
    return response.data;
};