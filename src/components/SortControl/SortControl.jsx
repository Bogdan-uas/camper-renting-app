import Map from '../../assets/icons/map/map.svg?react';
import AC from '../../assets/icons/category-icons/ac.svg?react';
import Transmission from '../../assets/icons/category-icons/transmission.svg?react';
import Cup from '../../assets/icons/category-icons/cup.svg?react';
import TV from '../../assets/icons/category-icons/tv.svg?react';
import Shower from '../../assets/icons/category-icons/shower.svg?react';

import SortCard from '../reusables/SortCard/SortCard';
import css from './SortControl.module.css';

const SortControl = () => {
    return (
        <form>
            <div className={css.location_container}>
                <label className={css.location_label} htmlFor="location">Location</label>
                <div className={css.location_input_container}>
                    <input
                        className={css.location_input}
                        name="location"
                        id="location"
                        type="text"
                        placeholder="City"
                    />
                    <Map className={css.location_icon} />
                </div>
            </div>
            <span className={css.filters_label}>Filters</span>
            <div className={css.filters_container}>
                <span className={css.filters_vehicle_label}>Vehicle Equipment</span>
                <div className={css.divider} />
                <div className={css.sort_cards_container}>
                    <SortCard icon={AC} text="AC" />
                    <SortCard icon={Transmission} text="Automatic" />
                    <SortCard icon={Cup} text="Kitchen" />
                    <SortCard icon={TV} text="TV" />
                    <SortCard icon={Shower} text="Bathroom" />
                </div>
            </div>
        </form>
    );
};

export default SortControl;