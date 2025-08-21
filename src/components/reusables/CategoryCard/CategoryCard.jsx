import css from './CategoryCard.module.css';
import Transmission from '../../../assets/icons/category-icons/transmission.svg?react';

const CategoryCard = () => {
    return (
        <div className={css.category_card}>
            <Transmission />
            Automatic
        </div>
    );
}

export default CategoryCard;