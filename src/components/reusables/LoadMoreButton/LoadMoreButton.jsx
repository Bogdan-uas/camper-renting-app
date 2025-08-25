import { useDispatch, useSelector } from "react-redux";
import { loadMore, resetVisibleCount } from "../../../redux/campers/campersSlice";
import { selectVisibleCount, selectCampers } from "../../../redux/selectors";
import css from "./LoadMoreButton.module.css";

const LoadMoreButton = ({ allRendered }) => {
    const dispatch = useDispatch();
    const visibleCount = useSelector(selectVisibleCount);
    const campers = useSelector(selectCampers);

    const hasMore = visibleCount < campers.length;

    if (!hasMore && !allRendered) return null;

    const handleClick = () => {
        if (hasMore) {
            dispatch(loadMore());
        } else if (allRendered) {
            dispatch(resetVisibleCount());
        }
    };

    return (
        <button onClick={handleClick} className={css.load_more_btn}>
            {allRendered ? "Show Less" : "Load More"}
        </button>
    );
};

export default LoadMoreButton;