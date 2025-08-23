import { useSelector, useDispatch } from "react-redux";
import {
    toggleDraftEquipment,
    setDraftVehicleType,
    setDraftLocation,
    applyFilters,
} from "../../redux/filters/filtersSlice";
import { resetVisibleCount } from "../../redux/campers/campersSlice";

import Map from '../../assets/icons/map/map.svg?react';
import AC from '../../assets/icons/category-icons/ac.svg?react';
import Transmission from '../../assets/icons/category-icons/transmission.svg?react';
import Cup from '../../assets/icons/category-icons/cup.svg?react';
import TV from '../../assets/icons/category-icons/tv.svg?react';
import Shower from '../../assets/icons/category-icons/shower.svg?react';
import Alcove from '../../assets/icons/type-icons/alcove.svg?react';
import FullyIntegrated from '../../assets/icons/type-icons/fullyIntegrated.svg?react';
import Van from '../../assets/icons/type-icons/van.svg?react';

import SortCard from '../reusables/SortCard/SortCard';
import ReusableButton from '../reusables/ReusableButton/ReusableButton';
import css from './SortControl.module.css';

const SortControl = () => {
    const dispatch = useDispatch();
    const draft = useSelector(state => state.filters.draft);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(resetVisibleCount());
        dispatch(applyFilters());
    };

    return (
        <form onSubmit={handleSearch}>
            <div className={css.location_container}>
                <label className={css.location_label} htmlFor="location">Location</label>
                <div className={css.location_input_container}>
                    <input
                        className={css.location_input}
                        name="location"
                        id="location"
                        type="text"
                        placeholder="City"
                        value={draft.location}
                        onChange={(e) => dispatch(setDraftLocation(e.target.value))}
                    />
                    <Map className={css.location_icon} />
                </div>
            </div>
            <span className={css.filters_label}>Filters</span>
            <div className={css.filters_container}>
                <span className={css.filters_vehicle_label}>Vehicle Equipment</span>
                <div className={css.divider} />
                <div className={css.sort_cards_container}>
                    <SortCard icon={AC} text="AC" type="checkbox"
                        checked={draft.equipment.includes("AC")}
                        onChange={() => dispatch(toggleDraftEquipment("AC"))} />
                    <SortCard icon={Transmission} text="Automatic" type="checkbox"
                        checked={draft.equipment.includes("Automatic")}
                        onChange={() => dispatch(toggleDraftEquipment("Automatic"))} />
                    <SortCard icon={Cup} text="Kitchen" type="checkbox"
                        checked={draft.equipment.includes("Kitchen")}
                        onChange={() => dispatch(toggleDraftEquipment("Kitchen"))} />
                    <SortCard icon={TV} text="TV" type="checkbox"
                        checked={draft.equipment.includes("TV")}
                        onChange={() => dispatch(toggleDraftEquipment("TV"))} />
                    <SortCard icon={Shower} text="Bathroom" type="checkbox"
                        checked={draft.equipment.includes("Bathroom")}
                        onChange={() => dispatch(toggleDraftEquipment("Bathroom"))} />
                </div>
            </div>
            <div className={css.filters_container}>
                <span className={css.filters_vehicle_label}>Vehicle Type</span>
                <div className={css.divider} />
                <div className={css.sort_cards_container}>
                    <SortCard icon={Van} text="Van" type="radio" name="vehicle-type"
                        checked={draft.vehicleType === "Van"}
                        onChange={() => dispatch(setDraftVehicleType("Van"))} />
                    <SortCard icon={FullyIntegrated} text="Fully Integrated" type="radio" name="vehicle-type"
                        checked={draft.vehicleType === "Fully Integrated"}
                        onChange={() => dispatch(setDraftVehicleType("Fully Integrated"))} />
                    <SortCard icon={Alcove} text="Alcove" type="radio" name="vehicle-type"
                        checked={draft.vehicleType === "Alcove"}
                        onChange={() => dispatch(setDraftVehicleType("Alcove"))} />
                </div>
            </div>
            <ReusableButton
                text="Search"
                type="submit"
                customPadding="16px 56.5px"
            />
        </form>
    );
};

export default SortControl;