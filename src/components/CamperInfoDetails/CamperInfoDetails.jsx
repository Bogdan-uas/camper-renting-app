import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../../redux/ui/camperTabSlice";
import { selectActiveTab } from "../../redux/selectors";

import css from './CamperInfoDetails.module.css';
import CamperDetails from './CamperDetails/CamperDetails';
import CamperReviews from './CamperReviews/CamperReviews';

const CamperInfoDetails = () => {
    const dispatch = useDispatch();
    const activeTab = useSelector(selectActiveTab);
    const linksRef = useRef(null);
    const [underlineStyle, setUnderlineStyle] = useState({ width: 0, transform: 'translateX(0px)' });

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
                    >
                        Features
                    </button>
                    <button
                        className={css.tab_button}
                        onClick={() => dispatch(setTab("reviews"))}
                    >
                        Reviews
                    </button>
                    <span className={css.underline} style={underlineStyle}></span>
                </div>
            </div>
            <div className={css.divider} />

            <div className={css.tab_content}>
                {activeTab === "details" && <CamperDetails />}
                {activeTab === "reviews" && <CamperReviews />}
            </div>
        </div>
    );
};

export default CamperInfoDetails;