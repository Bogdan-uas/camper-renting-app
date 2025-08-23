import css from './SortCard.module.css';

const SortCard = ({ icon: Icon, text, type, name, checked, onChange }) => {
    return (
        <label className={css.sort_card_label}>
            <input
                className="visually_hidden"
                type={type}
                name={name || text}
                checked={checked}
                onChange={onChange}
            />
            <span className={css.sort_card}>
                <Icon className={css.sort_card_icon} />
                {text}
            </span>
        </label>
    );
};

export default SortCard;