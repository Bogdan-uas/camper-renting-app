import { instance } from "./api/axiosInstance";

export const getCampers = async () => {
    const response = await instance.get("/campers");
    return response.data;
};

export const getCamperById = async (id) => {
    const response = await instance.get(`/campers/${id}`);
    return response.data;
};