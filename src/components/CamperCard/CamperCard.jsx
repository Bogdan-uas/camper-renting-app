import css from './CamperCard.module.css';
import Rating from '../../assets/icons/rating/rating.svg?react';
import Map from '../../assets/icons/map/map.svg?react';
import Heart from '../../assets/icons/heart/heart.svg?react';
import CategoryCard from '../reusables/CategoryCard/CategoryCard';
import ReusableButton from '../reusables/ReusableButton/ReusableButton';

const CamperCard = ({ camper }) => {
    return (
        <div className={css.camper_card}>
            {camper.gallery[0].thumb ? (
                <img
                    className={css.camper_image}
                    src={camper.gallery[0].thumb}
                    alt={camper.name}
                />
            ) : (
                <div className={css.placeholder_image}>?</div>
            )}

            <div className={css.camper_info}>
                <div className={css.camper_name_container}>
                    <h2 className={css.camper_name}>{camper.name}</h2>
                    <div className={css.camper_price_container}>
                        <span className={css.camper_price}>€{camper.price}</span>
                        <button className={css.heart_button}><Heart className={css.heart_icon} /></button>
                    </div>
                </div>

                <div className={css.rating_location_container}>
                    <div className={css.rating_container}>
                        <Rating />
                        <span className={css.rating_text}>
                            {camper.rating} ({camper.reviews?.length || 0} Reviews)
                        </span>
                    </div>
                    <div className={css.rating_container}>
                        <Map />
                        <span className={css.rating_text}>{camper.location}</span>
                    </div>
                </div>

                <p className={css.camper_description}>{camper.description}</p>
                <ul className={css.category_list}>
                    <li><CategoryCard /></li>
                    <li><CategoryCard /></li>
                    <li><CategoryCard /></li>
                    <li><CategoryCard /></li>
                    <li><CategoryCard /></li>
                </ul>
                <ReusableButton
                    text="Show More"
                    linkPath={`/catalog/${camper.id}`}
                    customWidth="166px"
                    customPadding="16px 40px"
                />
            </div>
        </div>
    );
};

export default CamperCard;