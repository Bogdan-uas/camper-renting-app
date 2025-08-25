import { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleDraftEquipment,
    setDraftVehicleType,
    setDraftLocation,
    applyFilters,
    resetFilters,
} from "../../redux/filters/filtersSlice";
import { resetVisibleCount } from "../../redux/campers/campersSlice";
import { fetchFilteredCampers } from "../../redux/campers/campersOps";

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
import { selectCampers, selectDraftFilters, selectAppliedFilters } from "../../redux/selectors";
import css from './SortControl.module.css';

const SortControl = () => {
    const dispatch = useDispatch();
    const draft = useSelector(selectDraftFilters);
    const appliedFilters = useSelector(selectAppliedFilters);
    const campers = useSelector(selectCampers);

    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        if (!appliedFilters) return;

        dispatch(resetFilters());

        if (appliedFilters.vehicleType) {
            dispatch(setDraftVehicleType(appliedFilters.vehicleType));
        }
        if (appliedFilters.location) {
            dispatch(setDraftLocation(appliedFilters.location));
        }
        appliedFilters.equipment?.forEach(eq => dispatch(toggleDraftEquipment(eq)));
    }, []);

    const cities = useMemo(() => {
        const allLocations = campers.map(c => c.location);
        return [...new Set(allLocations)].sort();
    }, [campers]);

    const filteredCities = useMemo(() => {
        if (!showDropdown) return [];
        const searchValue = draft.location?.trim().toLowerCase();
        if (!searchValue) return cities;
        return cities.filter(city => city.toLowerCase().includes(searchValue));
    }, [cities, draft.location, showDropdown]);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(resetVisibleCount());
        dispatch(applyFilters());
        dispatch(fetchFilteredCampers(draft));
        setShowDropdown(false);
    };

    const handleReset = () => {
        dispatch(resetFilters());
        dispatch(resetVisibleCount());
        dispatch(fetchFilteredCampers({}));
    };

    const handleSelectCity = (city) => {
        dispatch(setDraftLocation(city));
        setShowDropdown(false);
    };

    const mapColor = draft.location ? "#101828" : "#6c717b";

    return (
        <form onSubmit={handleSearch} autoComplete="off">
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
                        onChange={(e) => {
                            dispatch(setDraftLocation(e.target.value));
                            setShowDropdown(true);
                        }}
                        onFocus={() => setShowDropdown(true)}
                        onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                    />
                    <Map
                        className={css.location_icon}
                        style={{ color: mapColor }}
                    />
                    {showDropdown && filteredCities.length > 0 && (
                        <ul className={css.dropdown}>
                            {filteredCities.map(city => (
                                <li key={city} onClick={() => handleSelectCity(city)}>
                                    {city}
                                </li>
                            ))}
                        </ul>
                    )}
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
                        checked={draft.equipment.includes("automatic")}
                        onChange={() => dispatch(toggleDraftEquipment("automatic"))} />
                    <SortCard icon={Cup} text="Kitchen" type="checkbox"
                        checked={draft.equipment.includes("kitchen")}
                        onChange={() => dispatch(toggleDraftEquipment("kitchen"))} />
                    <SortCard icon={TV} text="TV" type="checkbox"
                        checked={draft.equipment.includes("TV")}
                        onChange={() => dispatch(toggleDraftEquipment("TV"))} />
                    <SortCard icon={Shower} text="Bathroom" type="checkbox"
                        checked={draft.equipment.includes("bathroom")}
                        onChange={() => dispatch(toggleDraftEquipment("bathroom"))} />
                </div>
            </div>

            <div className={css.filters_container}>
                <span className={css.filters_vehicle_label}>Vehicle Type</span>
                <div className={css.divider} />
                <div className={css.sort_cards_container}>
                    <SortCard icon={Van} text="Van" type="radio" name="vehicle-type"
                        checked={draft.vehicleType === "panelTruck"}
                        onChange={() => dispatch(setDraftVehicleType("panelTruck"))} />
                    <SortCard icon={FullyIntegrated} text="Fully Integrated" type="radio" name="vehicle-type"
                        checked={draft.vehicleType === "fullyIntegrated"}
                        onChange={() => dispatch(setDraftVehicleType("fullyIntegrated"))} />
                    <SortCard icon={Alcove} text="Alcove" type="radio" name="vehicle-type"
                        checked={draft.vehicleType === "alcove"}
                        onChange={() => dispatch(setDraftVehicleType("alcove"))} />
                </div>
            </div>

            <div className={css.buttons_container}>
                <ReusableButton
                    text="Reset"
                    type="button"
                    customPadding="16px 60px"
                    variant="reset"
                    onClick={handleReset}
                />
                <ReusableButton
                    text="Search"
                    type="submit"
                    customPadding="16px 56.5px"
                />
            </div>
        </form>
    );
};

export default SortControl;