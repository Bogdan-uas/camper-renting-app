import css from './CamperReviews.module.css';
import LiveRating from '../../../assets/icons/rating/live-rating.svg?react';
import BlankRating from '../../../assets/icons/rating/blank-rating.svg?react';

const CamperReviews = ({ camper }) => {
    if (!camper || !camper.reviews || camper.reviews.length === 0) {
        return <p className={css.camper_reviewer_name}>No reviews yet.</p>;
    }

    return (
        <ul id='reviews' className={css.camper_reviews_list}>
            {camper.reviews.map((review, idx) => (
                <li key={idx}>
                    <div className={css.camper_review_container}>
                        <div className={css.camper_reviewer_container}>
                            <div className={css.camper_reviewer_avatar}>
                                {review?.reviewer_name
                                    ? review.reviewer_name.charAt(0).toUpperCase()
                                    : "?"}
                            </div>
                            <div className={css.camper_review_name_rating_container}>
                                <span className={css.camper_reviewer_name}>
                                    {review?.reviewer_name || "Anonymous"}
                                </span>
                                <span className={css.camper_review_stars}>
                                    {[...Array(5)].map((_, i) =>
                                        i < review.reviewer_rating ? (
                                            <LiveRating key={i} />
                                        ) : (
                                            <BlankRating key={i} />
                                        )
                                    )}
                                </span>
                            </div>
                        </div>
                        <p className={css.camper_review_text}>{review.comment}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CamperReviews;
