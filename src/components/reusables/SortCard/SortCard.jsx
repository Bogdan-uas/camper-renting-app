import css from './SortCard.module.css';

const SortCard = ({ icon: Icon, text }) => {
    return (
        <label className={css.sort_card_label}>
            <input className="visually_hidden" type="checkbox" name={text} />
            <span className={css.sort_card}>
                <Icon className={css.sort_card_icon} />
                {text}
            </span>
        </label>
    );
};

export default SortCard;