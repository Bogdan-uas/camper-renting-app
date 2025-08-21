import CamperCard from "../CamperCard/CamperCard";
import { useGetCampers } from "../../api/hooks/useGetCampers";
import css from "./CamperList.module.css";

const CamperList = () => {
    const { campers, isLoading, error } = useGetCampers();

    if (isLoading) return <p>Loading campers...</p>;
    if (error) return <p>{error}</p>;
    if (campers.length === 0) return <p>No campers found.</p>;

    return (
        <ul className={css.camper_list}>
            {campers.map((camper) => (
                <li key={camper.id}>
                    <CamperCard camper={camper} />
                </li>
            ))}
        </ul>
    );
};

export default CamperList;