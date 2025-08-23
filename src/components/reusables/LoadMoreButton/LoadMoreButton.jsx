import { useDispatch } from "react-redux";
import { loadMore, resetVisibleCount } from "../../../redux/campers/campersSlice";
import css from "./LoadMoreButton.module.css";

const LoadMoreButton = ({ hasMore, allRendered }) => {
    const dispatch = useDispatch();

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
            {hasMore ? "Load More" : "Show Less"}
        </button>
    );
};

export default LoadMoreButton;