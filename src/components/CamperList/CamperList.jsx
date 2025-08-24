import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/campersOps";
import {
    selectFilteredCampers,
    selectIsLoading,
    selectError,
    selectVisibleCount,
} from "../../redux/selectors";
import CamperCard from "../CamperCard/CamperCard";
import LoadMoreButton from "../reusables/LoadMoreButton/LoadMoreButton";
import { resetVisibleCount } from "../../redux/campers/campersSlice";
import css from "./CamperList.module.css";

const CamperList = () => {
    const dispatch = useDispatch();
    const campers = useSelector(selectFilteredCampers);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const visibleCount = useSelector(selectVisibleCount);

    useEffect(() => {
        dispatch(fetchCampers());
        dispatch(resetVisibleCount());
    }, [dispatch]);

    if (isLoading) return <p>Loading campers...</p>;

    const allRendered = visibleCount >= campers.length;

    return (
        <div className={css.camper_list_container}>
            <ul className={css.camper_list}>
                {error ? (
                    <div className={css.card_placeholder}>{error}</div>
                ) : campers.length === 0 ? (
                    <div className={css.card_placeholder}>There is no such camper yet.</div>
                ) : (
                    campers.slice(0, visibleCount).map((camper) => (
                        <li key={camper.id}>
                            <CamperCard camper={camper} />
                        </li>
                    ))
                )}
            </ul>

            {!error && campers.length > 4 && (
                <LoadMoreButton allRendered={allRendered} />
            )}
        </div>
    );
};

export default CamperList;