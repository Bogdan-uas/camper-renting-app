import css from './CamperDetails.module.css';
import CategoryCard from '../../reusables/CategoryCard/CategoryCard';

const CamperDetails = ({ camper, features }) => {
    const formatLabel = (label) => {
        // Format the label to be sure, every label is capitalized and if it's an abbreviation, it stays uppercase
        if (label.length <= 3 && label === label.toUpperCase()) {
            return label;
        }
        return label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
    };
    const splitNumberAndUnit = (value) => {
        if (!value) return { number: value, unit: "" };
        const match = value.match(/^([\d.]+)([a-zA-Z]+)$/);
        if (match) {
            return { number: match[1], unit: match[2] };
        }
        return { number: value, unit: "" };
    };

    return (
        <div className={css.details_container}>
            <ul className={css.category_list}>
                {features.map((feature, idx) => (
                    <li key={idx}>
                        <CategoryCard icon={feature.icon} label={feature.label} />
                    </li>
                ))}
            </ul>
            <div className={css.vehicle_details_container}>
                <span className={css.vehicle_details}>Vehicle Details</span>
                <div className={css.divider} />
                <div className={css.vehicle_detail_info}>
                    {/* This whole structure is in order to follow the DRY-method and make the value like 123 m (and like 123m) */}
                    {camper?.form && (
                        <span className={css.vehicle_detail_wrapper}>
                            <span className={css.vehicle_detail_label}>Form</span>
                            <span className={css.vehicle_detail_label}>{formatLabel(camper.form)}</span>
                        </span>
                    )}
                    {["length", "width", "height", "tank"].map((key) => {
                        if (!camper?.[key]) return null;
                        const { number, unit } = splitNumberAndUnit(camper[key]);
                        return (
                            <span key={key} className={css.vehicle_detail_wrapper}>
                                <span className={css.vehicle_detail_label}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </span>
                                <span className={css.vehicle_detail_label}>
                                    {number} {unit}
                                </span>
                            </span>
                        );
                    })}
                    {camper?.consumption && (
                        <span className={css.vehicle_detail_wrapper}>
                            <span className={css.vehicle_detail_label}>Consumption</span>
                            <span className={css.vehicle_detail_label}>{camper.consumption}</span>
                        </span>
                    )}
                    {/* This whole structure is in order to follow the DRY-method and make the value like 123 m (and like 123m) */}
                </div>
            </div>
        </div>
    );
};

export default CamperDetails;
