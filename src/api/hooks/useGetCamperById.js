import { useState, useEffect } from "react";
import { getCamperById } from "../services/campersApi";

export const useGetCamperById = (id) => {
    const [camper, setCamper] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchCamper = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const data = await getCamperById(id);
                setCamper(data);
            } catch (err) {
                console.error("Failed to fetch camper:", err);
                setError("Failed to fetch camper");
            } finally {
                setIsLoading(false);
            }
        };

        fetchCamper();
    }, [id]);

    return { camper, isLoading, error };
};