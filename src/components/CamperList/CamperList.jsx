import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredCampers } from "../../redux/campers/campersOps";
import {
    selectCampers,
    selectError,
    selectVisibleCount,
    selectAppliedFilters,
} from "../../redux/selectors";
import CamperCard from "../CamperCard/CamperCard";
import LoadMoreButton from "../reusables/LoadMoreButton/LoadMoreButton";
import { resetVisibleCount } from "../../redux/campers/campersSlice";
import css from "./CamperList.module.css";

const CamperList = () => {
    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    const error = useSelector(selectError);
    const visibleCount = useSelector(selectVisibleCount);
    const appliedFilters = useSelector(selectAppliedFilters);

    useEffect(() => {
        dispatch(fetchFilteredCampers(appliedFilters));
        dispatch(resetVisibleCount());
    }, [dispatch, appliedFilters]);

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