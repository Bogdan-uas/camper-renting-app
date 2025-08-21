import { useEffect, useState } from "react";
import { getCampers } from "../services/campersApi";

export const useGetCampers = () => {
    const [campers, setCampers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCampers = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const res = await getCampers();
                setCampers(res.data.items);
            } catch (err) {
                console.error("Failed to fetch campers:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCampers();
    }, []);

    return { campers, isLoading, error };
};