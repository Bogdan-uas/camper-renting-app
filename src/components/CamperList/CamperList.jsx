import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/campersOps";
import {
    selectFilteredCampers,
    selectIsLoading,
    selectError,
    selectVisibleCount,
    selectHasMore,
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
    const hasMore = useSelector(selectHasMore);

    useEffect(() => {
        dispatch(fetchCampers());
        dispatch(resetVisibleCount());
    }, [dispatch]);

    if (isLoading) return <p>Loading campers...</p>;

    const allRendered = campers.length > 0 && visibleCount >= campers.length;

    return (
        <div className={css.camper_list_container}>
            <ul className={css.camper_list}>
                {error ? (
                    <div className={css.card_placeholder}>{error}</div>
                ) : campers.length === 0 ? (
                    <div className={css.card_placeholder}>No campers found.</div>
                ) : (
                    campers.slice(0, visibleCount).map((camper) => (
                        <li key={camper.id}>
                            <CamperCard camper={camper} />
                        </li>
                    ))
                )}
            </ul>

            {!error && campers.length > 0 && (
                <LoadMoreButton hasMore={hasMore} allRendered={allRendered} />
            )}
        </div>
    );
};

export default CamperList;