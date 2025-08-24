import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/campersOps";
import {
    selectCamperById,
    selectCurrentIndex,
} from "../../redux/selectors";
import { setCurrentIndex } from "../../redux/campers/camperSlidersSlice";

import css from './CamperInfo.module.css';
import Rating from '../../assets/icons/rating/live-rating.svg?react';
import Map from '../../assets/icons/map/map.svg?react';

const CamperInfo = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const camper = useSelector(selectCamperById(id));
    const currentIndex = useSelector(selectCurrentIndex);

    const windowSize = 4;

    useEffect(() => {
        if (!camper) {
            dispatch(fetchCampers());
        }
    }, [dispatch, camper]);

    if (!camper) return <p>Camper not found.</p>;

    const reviews = camper.reviews || [];
    const averageRating =
        reviews.length > 0
            ? (reviews.reduce((sum, r) => sum + r.reviewer_rating, 0) / reviews.length).toFixed(1)
            : 0;

    const gallery = [...camper.gallery, ...camper.gallery];
    const handleNext = () => {
        const newIndex =
            currentIndex + 1 >= gallery.length - windowSize + 1
                ? 0
                : currentIndex + 1;
        dispatch(setCurrentIndex(newIndex));
    };

    const handlePrev = () => {
        const newIndex =
            currentIndex === 0 ? gallery.length - windowSize : currentIndex - 1;
        dispatch(setCurrentIndex(newIndex));
    };

    const visibleGallery = gallery.slice(currentIndex, currentIndex + windowSize);

    return (
        <div className={css.camper_info_container}>
            <div className={css.camper_title_slider_container}>
                <div className={css.camper_name_container}>
                    <h2 className={css.camper_name}>{camper.name}</h2>
                    <div className={css.rating_location_container}>
                        <div className={css.rating_container}>
                            <Rating />
                            <span className={css.rating_text}>
                                {averageRating} ({reviews.length} Reviews)
                            </span>
                        </div>
                        <div className={css.rating_container}>
                            <Map />
                            <span className={css.rating_text}>{camper.location}</span>
                        </div>
                    </div>
                </div>

                <span className={`${css.camper_name} ${css.price}`}>€{camper.price}.00</span>

                <div className={css.slider_container}>
                    <button className={css.slider_btn} onClick={handlePrev}>&lt;</button>

                    <ul className={css.slider_list}>
                        {visibleGallery.map((img, idx) => (
                            <li key={currentIndex + idx}>
                                <img
                                    className={css.camper_image}
                                    src={img.original}
                                    alt={`${camper.name} ${currentIndex + idx + 1}`}
                                />
                            </li>
                        ))}
                    </ul>

                    <button className={css.slider_btn} onClick={handleNext}>&gt;</button>
                </div>
                <p className={css.camper_description}>{camper.description}</p>
            </div>
        </div>
    );
};

export default CamperInfo;