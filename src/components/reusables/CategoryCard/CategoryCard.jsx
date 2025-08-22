import css from './CategoryCard.module.css';

const formatLabel = (label) => {
    // Format the label to be sure, every label is capitalized and if it's an abbreviation, it stays uppercase
    if (label.length <= 3 && label === label.toUpperCase()) {
        return label;
    }
    return label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
};

const CategoryCard = ({ icon: Icon, label }) => {
    return (
        <div className={css.category_card}>
            <Icon className={css.icon} />
            <span className={css.label}>{formatLabel(label)}</span>
        </div>
    );
};

export default CategoryCard;