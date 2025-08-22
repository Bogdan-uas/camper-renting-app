import css from './CamperCard.module.css';
import Rating from '../../assets/icons/rating/rating.svg?react';
import Map from '../../assets/icons/map/map.svg?react';
import Heart from '../../assets/icons/heart/heart.svg?react';
import CategoryCard from '../reusables/CategoryCard/CategoryCard';
import ReusableButton from '../reusables/ReusableButton/ReusableButton';

import AC from '../../assets/icons/category-icons/ac.svg?react';
import Cup from '../../assets/icons/category-icons/cup.svg?react';
import Engine from '../../assets/icons/category-icons/engine.svg?react';
import Fridge from '../../assets/icons/category-icons/fridge.svg?react';
import Gas from '../../assets/icons/category-icons/gas.svg?react';
import Microwave from '../../assets/icons/category-icons/microwave.svg?react';
import Radio from '../../assets/icons/category-icons/radio.svg?react';
import Shower from '../../assets/icons/category-icons/shower.svg?react';
import Transmission from '../../assets/icons/category-icons/transmission.svg?react';
import TV from '../../assets/icons/category-icons/tv.svg?react';
import Water from '../../assets/icons/category-icons/water.svg?react';

const CamperCard = ({ camper }) => {
    // Camper features, are needed for mapping the CategoryCards (so there are multiple of them on the card)
    const features = [
        camper.AC && { icon: AC, label: "AC" },
        camper.kitchen && { icon: Cup, label: "Kitchen" },
        camper.engine && { icon: Engine, label: camper.engine },
        camper.refrigerator && { icon: Fridge, label: "Fridge" },
        camper.gas && { icon: Gas, label: "Gas" },
        camper.microwave && { icon: Microwave, label: "Microwave" },
        camper.radio && { icon: Radio, label: "Radio" },
        camper.bathroom && { icon: Shower, label: "Bathroom" },
        camper.transmission && { icon: Transmission, label: camper.transmission },
        camper.TV && { icon: TV, label: "TV" },
        camper.water && { icon: Water, label: "Water" },
    ].filter(Boolean);
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
                        <span className={css.camper_name}>€{camper.price}.00</span>
                        <button className={css.heart_button}><Heart className={css.heart_icon} /></button>
                    </div>
                </div>

                <div className={css.rating_location_container}>
                    <div className={css.rating_container}>
                        <Rating />
                        <span className={css.rating_text}>
                            {camper.rating}({camper.reviews?.length || 0} Reviews)
                        </span>
                    </div>
                    <div className={css.rating_container}>
                        <Map />
                        <span className={css.rating_text}>{camper.location}</span>
                    </div>
                </div>

                <p className={css.camper_description}>{camper.description}</p>
                <ul className={css.category_list}>
                    {features.map((feature, idx) => (
                        <li key={idx}>
                            <CategoryCard icon={feature.icon} label={feature.label} />
                        </li>
                    ))}
                </ul>
                <ReusableButton
                    text="Show More"
                    linkPath={`/catalog/${camper.id}`}
                    // custom width and padding, because there are multiple ReusableButtons on the site, which are different on these styles
                    customWidth="166px"
                    customPadding="16px 40px"
                />
            </div>
        </div>
    );
};

export default CamperCard;