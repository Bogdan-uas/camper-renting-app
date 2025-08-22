import Map from '../../assets/icons/map/map.svg?react';
import css from './SortControl.module.css';

const SortControl = () => {
    return (
        <form>
            <div className={css.location_container}>
                <label className={css.location_label} htmlFor="location">Location</label>
                <div className={css.location_input_container}>
                    <input className={css.location_input} name="location" id="location" type="text" placeholder="City" />
                    <Map className={css.location_icon} />
                </div>
            </div>
            <span className={css.filters_label}>Filters</span>
            <div className={css.filters_container}>
                <span className={css.filters_vehicle_label}>Vehicle Equipment</span>
                <div className={css.divider}></div>
            </div>
        </form>
    );
};

export default SortControl;