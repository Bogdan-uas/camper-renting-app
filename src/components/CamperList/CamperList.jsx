import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campersOps";
import { loadMore, resetVisibleCount } from "../../redux/campersSlice";
import {
    selectCampers,
    selectIsLoading,
    selectError,
    selectVisibleCount,
    selectHasMore,
} from "../../redux/selectors";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";

const CamperList = () => {
    const dispatch = useDispatch();
    const campers = useSelector(selectCampers);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const visibleCount = useSelector(selectVisibleCount);
    const hasMore = useSelector(selectHasMore);

    useEffect(() => {
        dispatch(fetchCampers());
        dispatch(resetVisibleCount());
    }, [dispatch]);

    if (isLoading) return <p>Loading campers...</p>;
    if (error) return <p>{error}</p>;
    if (campers.length === 0) return <p>No campers found.</p>;

    return (
        <div className={css.camper_list_container}>
            <ul className={css.camper_list}>
                {campers.slice(0, visibleCount).map((camper) => (
                    <li key={camper.id}>
                        <CamperCard camper={camper} />
                    </li>
                ))}
            </ul>

            {hasMore && (
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