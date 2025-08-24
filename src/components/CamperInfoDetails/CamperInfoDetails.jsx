import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../../redux/ui/camperTabSlice";
import {
    selectActiveTab,
    selectCamperById,
} from "../../redux/selectors";
import { useParams } from "react-router-dom";

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


import css from './CamperInfoDetails.module.css';
import CamperDetails from './CamperDetails/CamperDetails';
import CamperReviews from './CamperReviews/CamperReviews';
import CamperBookForm from './CamperBookForm/CamperBookForm';

const CamperInfoDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const camper = useSelector(selectCamperById(id));
    const activeTab = useSelector(selectActiveTab);
    const linksRef = useRef(null);
    const [underlineStyle, setUnderlineStyle] = useState({ width: 0, transform: 'translateX(0px)' });

    const features = camper ? [
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
    ].filter(Boolean) : [];

    useEffect(() => {
        const buttons = linksRef.current.children;
        const activeButton = activeTab === "details" ? buttons[0] : buttons[1];
        setUnderlineStyle({
            width: activeButton.offsetWidth,
            transform: `translateX(${activeButton.offsetLeft}px)`,
        });
    }, [activeTab]);

    return (
        <div className={css.info_details_container}>
            <div className={css.header_container}>
                <div className={css.links_container} ref={linksRef}>
                    <button
                        className={css.tab_button}
                        onClick={() => dispatch(setTab("details"))}
                        disabled={activeTab === "details"}
                    >
                        Features
                    </button>
                    <button
                        className={css.tab_button}
                        onClick={() => dispatch(setTab("reviews"))}
                        disabled={activeTab === "reviews"}
                    >
                        Reviews
                    </button>
                    <span className={css.underline} style={underlineStyle}></span>
                </div>
            </div>
            <div className={css.divider} />

            <ul className={css.tab_content}>
                {activeTab === "details" &&
                    <CamperDetails camper={camper} features={features} />
                }
                {activeTab === "reviews" &&
                    <CamperReviews camper={camper} />
                }
                <li><CamperBookForm /></li>
            </ul>
        </div>
    );
};

export default CamperInfoDetails;