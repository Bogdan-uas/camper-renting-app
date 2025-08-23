import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/campersOps";
import { loadMore, resetVisibleCount } from "../../redux/campers/campersSlice";
import {
    selectFilteredCampers,
    selectIsLoading,
    selectError,
    selectVisibleCount,
    selectHasMore,
} from "../../redux/selectors";
import CamperCard from "../CamperCard/CamperCard";
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

            {!error && hasMore && campers.length > 0 && (
                <button
                    onClick={() => dispatch(loadMore())}
                    className={css.load_more_btn}
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default CamperList;