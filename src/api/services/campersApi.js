import { instance } from "../axiosInstance";

export const getCampers = async () => {
    const response = await instance.get("/");
    return response.data;
};

export const getCamperById = async (id) => {
    const response = await instance.get(`/${id}`);
    return response.data;
};